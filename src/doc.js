import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';

function Documentation() {
  return (
    <Container>
      <br/>
      <h1>Documentation</h1>
      <h2>Goals</h2>
      <p>The goal of this project is to demonstrate a simple <b>multi-lingual finance chatbot</b> running on the <b>AWS platform</b>.</p>
      <p>The project is also a <b>technical demo</b>:</p>
      <ul>
        <li><a href="https://aws.amazon.com/serverless/" target="external">Serverless</a> approach</li>
        <li><b>Automated deployment</b> (CI/CD)</li>
      </ul>
      <h2>Features</h2>
      <p>The chatbot demo support the following <b>features</b>:</p>
      <ul>
        <li>Context persistence (stored client side)</li>
        <li><a href="https://github.com/axa-group/nlp.js/blob/master/docs/slot-filling.md" target="external">Slot filling</a></li>
        <li>Confirmation</li>
        <li>Conversation hints</li>
        <li>Responsive design</li>
      </ul>
      <h3>Use Cases</h3>
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
            <th>Get credit card limit</th>
            <td style={{textAlign:'center'}}>X<br/>ex: What is my current limit?</td>
            <td style={{textAlign:'center'}}>X<br/>ex: Quel est mon plafond actuel?</td>
            <td></td>
          </tr>
          <tr>
            <th>Modify credit card limit</th>
            <td style={{textAlign:'center'}}>X<br/>ex: I want to change my withdrawal limit</td>
            <td style={{textAlign:'center'}}>X<br/>ex: Je veux augmenter mon plafond de retrait mensuel</td>
            <td></td>
          </tr>
          <tr>
            <th>Help</th>
            <td style={{textAlign:'center'}}>X<br/>ex: What can you do?</td>
            <td style={{textAlign:'center'}}>X<br/>ex: J'ai besoin d'aide</td>
            <td></td>
          </tr>
          <tr>
            <th>Chitchat</th>
            <td style={{textAlign:'center'}}>X<br/>ex: You are so smart</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <h2>Technical Architecture</h2>
      <p>This chatbot demo leverages the <a href="https://github.com/axa-group/nlp.js" target="external">nlp.js</a> open source chatbot engine, built by AXA.
      This engine supports 29 languages and is already used it in production for insurance use cases.</p>
      <h3>Architecture Diagram</h3>
      <Image src="archi.png" fluid />
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
