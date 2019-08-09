const api_url = 'https://y6la06e1xa.execute-api.eu-west-1.amazonaws.com/Prod/chat';

var context = { };

var ChatMessage = React.createClass({ displayName: "ChatMessage",
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

var ChatHistory = React.createClass({ displayName: "ChatHistory",
  render: function () {
    return (
      React.createElement("div", { className: "chat-output" },
      this.props.messages.map(function (message, i) {
        return (
          React.createElement(ChatMessage, { key: i, message: message }));
      })));
  } });

var ChatMessageComposer = React.createClass({ displayName: "ChatMessageComposer",
  getInitialState: function () {
    return {
      inputValue: '' };
  },
  onKeyPress: function (event) {
    if (event.key !== 'Enter') {return;}
    this.props.sendMessage({
      message: this.state.inputValue,
      from: 'you' });
    this.setState({ inputValue: '' });
  },
  handleChange: function (event) {
    this.setState({ inputValue: event.target.value });
  },
  render: function () {
    return (
      React.createElement("div", { className: "chat-input" },
      React.createElement("input", { placeholder: "Talk to me...", className: "user-input", type: "text", value: this.state.inputValue, onChange: this.handleChange, onKeyPress: this.onKeyPress })));
  }
});

var Chat = React.createClass({ displayName: "Chat",
  getInitialState: function () {
    return {
      messages: []
     };
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
          that.receiveMessage(data.message);
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
      React.createElement(ChatMessageComposer, { sendMessage: this.sendMessage })));
  }
});


ReactDOM.render(React.createElement(Chat, null), document.getElementById('app'));
