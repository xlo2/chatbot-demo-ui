import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Chat from './chat'
import Documentation from './doc'

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Chatbot-Demo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Demo</Nav.Link>
            <Nav.Link as={Link} to="/doc">Documentation</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Demo} />
        <Route path="/doc" component={Documentation} />
        <Route path="/about" component={About} />
        <Route component={Demo} />
      </Switch>
    </Router>
  );
}

function Demo() {
  return (
    <Chat></Chat>
  );
}

function About() {
  return (
    <Container>
      <br/>
      <Jumbotron>
        <h1>About Chatbot Demo</h1>
        <p>
          A chatbot demo.
        </p>
      </Jumbotron>
    </Container>
  );
}

export default App;
