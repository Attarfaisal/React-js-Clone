import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Body.css'

const Body = () => {
  return (
    <div className="homepage">
      <div className="body">
        <h1 id="head">React</h1>
        <p className="card-para">
          A JavaScript liabrary for building user interface
        </p>
        <Button variant="outline-primary" className="btn-body" id="start">
          Get Started
        </Button>{" "}
        <Button variant="outline-secondary" className="btn-body" id="tutorial">
          Take the tutorial &gt;{" "}
        </Button>{" "}
      </div>
      <div className="home-div">
        <div id="home-content">
          <CardGroup className="ffdoo">
            <Card className="homecards-div">
              <Card.Body className="ffoo">
                <Card.Title className="home-head">Declarative</Card.Title>
                <Card.Text className="card-para">
                  React makes it painless to create interactive UIs. Design
                  simple views for each state in your application, and React
                  will efficiently update and render just the right components
                  when your data changes. Declarative views make your code more
                  predictable and easier to debug.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="homecards-div">
              <Card.Body className="ffoo">
                <Card.Title className="home-head">Component-Based</Card.Title>
                <Card.Text className="card-para">
                  Build encapsulated components that manage their own state,
                  then compose them to make complex UIs. Since component logic
                  is written in JavaScript instead of templates, you can easily
                  pass rich data through your app and keep state out of the DOM.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="homecards-div">
              <Card.Body className="ffoo">
                <Card.Title className="home-head">
                  Learn Once, Write Anywhere
                </Card.Title>
                <Card.Text className="card-para">
                  We don’t make assumptions about the rest of your technology
                  stack, so you can develop new features in React without
                  rewriting existing code. React can also render on the server
                  using Node and power mobile apps using React Native.
                </Card.Text>
              </Card.Body>
              
            </Card>
          </CardGroup>
        </div>
      </div>
    </div>
  );
};

export default Body;
