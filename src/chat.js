import React from "react";
import Button from 'react-bootstrap/Button';

var createReactClass = require('create-react-class');
const api_url = 'https://y6la06e1xa.execute-api.eu-west-1.amazonaws.com/Prod/chat';
var context = { };

var ChatMessage = createReactClass({ displayName: "ChatMessage",
  generateClasses: function () {
    if (this.props.message.from === 'bot') {
      return 'bot-message';
    } else {
      return 'user-message';
    }
  },
  render: function () {
    return React.createElement("div", { className: this.generateClasses() },
    React.createElement("div", { className: "message" }, this.props.message.message));
  }
});

var ChatHistory = createReactClass({ displayName: "ChatHistory",
  render: function () {
    return (
      React.createElement("div", { className: "chat-output" },
      this.props.messages.map(function (message, i) {
        return (
          React.createElement(ChatMessage, { key: i, message: message }));
      })));
  } });

class ChatHint extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  //  this.state = { count: props.initialCount };
  }
  handleClick() {
   this.props.sendMessage({
     message: this.props.hint.hint,
     from: 'you' });
   this.props.removeHints();
  }
  render() {
    return <Button variant="secondary" size="lg" onClick={this.handleClick} block>
      {this.props.hint.hint}
    </Button>
  }
}

var ChatHints = createReactClass({ displayName: "ChatHints",
  render: function () {
    return (
      React.createElement("div", { className: "chat-hints" },
      this.props.hints.map((hint, i) => (
        React.createElement(ChatHint, { key: i, hint: hint, sendMessage: this.props.sendMessage, removeHints: this.props.removeHints }
      )))))
  } });

var ChatMessageComposer = createReactClass({ displayName: "ChatMessageComposer",
  getInitialState: function () {
    return {
      inputValue: '' };
  },
  onKeyPress: function (event) {
    if (event.key !== 'Enter') {return;}
    this.props.sendMessage({
      message: this.state.inputValue,
      from: 'you' });
    this.props.removeHints();
    this.setState({ inputValue: '' });
  },
  handleChange: function (event) {
    this.setState({ inputValue: event.target.value });
  },
  render: function () {
    return (
      React.createElement("div", { className: "chat-input" },
      React.createElement("input", { placeholder: "Talk to me...", className: "user-input", type: "text", value: this.state.inputValue, onChange: this.handleChange, onKeyPress: this.onKeyPress, autoFocus: true })));
  }
});

var Chat = createReactClass({ displayName: "Chat",
  getInitialState: function () {
    return {
      messages: [ { message: "Hi! I am your credit card limit assistant. I can speak English and French", from: 'bot' },
        { message: "You can ask me for your current credit card limit or request a modification", from: 'bot' } ],
      hints: [ { hint: "Change my card limit" }, { hint: "Quelle est la limite de ma carte ?" } ]
     };
  },
  receiveHints: function (hints) {
    let hintsArray = hints.split(',');
    for (let i=0; i < hintsArray.length; i++) {
      this.setState(function (previousState) {
        previousState.hints.push({
          hint: hintsArray[i] });
        return { hints: previousState.hints };
      });
    }
  },
  removeHints: function () {
    this.setState(function (previousState) {
      previousState.hints= [];
      return { hints: previousState.hints };
    });
  },
  addMessage: function (message) {
    this.setState(function (previousState) {
      previousState.messages.push(message);
      return { messages: previousState.messages };
    });
  },
  receiveMessage: function (message) {
    this.setState(function (previousState) {
      previousState.messages.push({
        message: message,
        from: 'bot' });
      return { messages: previousState.messages };
    });
  },
  sendMessage: function (message) {
    let request = new Request(api_url, { method: 'POST', body: '{ "message": "' + message.message + '", "context": ' + JSON.stringify(context) + ' }'});
    let that = this;
    fetch(request).then(response => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        // Examine the text in the response
        response.json().then(function(data) {
          context = data.context;
          // Separate hint and message
          let splitMessage = data.message.split("|");
          that.receiveMessage(splitMessage[0]);
          if (splitMessage[1]) {
            that.receiveHints(splitMessage[1]);
          }
        });
      })
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      }
    );
    this.addMessage(message);
  },
  render: function () {
    return (
      React.createElement("div", { className: "chat" },
      React.createElement(ChatHistory, { messages: this.state.messages }),
      React.createElement(ChatMessageComposer, { sendMessage: this.sendMessage, removeHints: this.removeHints }),
      React.createElement(ChatHints, { sendMessage: this.sendMessage, removeHints: this.removeHints, hints: this.state.hints})));
  }
});

export default Chat;
