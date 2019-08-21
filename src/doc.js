import React from "react";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

function Documentation() {
  return (
    <Container>
      <br/>
      <h1>Documentation</h1>
      <h2>Goals</h2>
      <p>The goal was also to build a <b>technical demo</b>:</p>
      <ul>
        <li><b>Serverless</b> approach</li>
        <li><b>Automated deployment</b> (CI/CD)</li>
      </ul>
      <h2>Features</h2>
      <p>The chatbot demo support the following <b>features</b>:</p>
      <ul>
        <li>Context persistence (stored client side)</li>
        <li>Slot filling</li>
        <li>Confirmation</li>
        <li>Conversation hints</li>
        <li>Responsive design</li>
      </ul>
      <p>The following <b>use cases</b> have been implemented:</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th style={{textAlign:'center'}}>English</th>
            <th style={{textAlign:'center'}}>French</th>
            <th style={{textAlign:'center'}}>Spanish</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Get credit card limit</td>
            <td style={{textAlign:'center'}}>X</td>
            <td style={{textAlign:'center'}}>X</td>
            <td></td>
          </tr>
          <tr>
            <td>Modify credit card limit</td>
            <td style={{textAlign:'center'}}>X</td>
            <td style={{textAlign:'center'}}>X</td>
            <td></td>
          </tr>
          <tr>
            <td>Chitchat</td>
            <td style={{textAlign:'center'}}>X</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <h2>Technical Architecture</h2>
      <p>This chatbot demo leverages the <a href="https://github.com/axa-group/nlp.js" target="external">nlp.js</a> open source chatbot engine, built by AXA.
      This engine supports 29 languages and is already used it in production for insurance use cases.</p>
      <h2>TODO</h2>
      <ul>
        <li>Add additional languages</li>
        <li>Add additional business use cases</li>
        <li>Support chitchat in all languages</li>
        <li>Improve slot filling error handling</li>
        <li>Implement conversation analytical features</li>
      </ul>
    </Container>
  );
}

export default Documentation;
