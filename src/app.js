import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
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
        <Row>
          <Col lg="8">
            <h1>About Chatbot Demo</h1>
            <p>
              A simple chatbot project to demonstrate a multi-lingual serverless chatbot running on the AWS platform.
            </p>
            <p>
              Project developed by Xavier Loup with the help of its colleagues, leveraging the nlp.js chatbot engine. Chatbot image by Clémence.  
            </p>
          </Col>
          <Col lg="4">
            <Image src="chatbot.svg" fluid />
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default App;
