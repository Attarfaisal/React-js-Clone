import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { NavLink } from "react-router-dom";
import './Footer.css'


const Footer = () => {
  return (
    <div className="footer">
      <div id="footer-btn">
        <Button variant="outline-primary" className="btn-body" id="start">
          Get Started
        </Button>{" "}
        <Button variant="outline-secondary" className="btn-body" id="tutorial">
          Take the tutorial  &gt;{" "}
        </Button>{" "}
      </div>

      <div id="footer-content">
      <CardGroup className="foo">
      <Card className="cards-div">
      
        <Card.Body className="footer-head">
          <Card.Title>Facebook</Card.Title>
          <Card.Text>
            Copyright  &copy; 2022 Meta Platforms, Inc.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className="cards-div">
        
        <Card.Body  className="foo">
          <Card.Title className="footer-head">Docs</Card.Title>
          <Card.Text>
            <ol className="footer-list">
                <li><NavLink to='' className='list-footer'>Installation</NavLink></li>
                <li><NavLink to='' className='list-footer'>Main Concept</NavLink></li>
                <li><NavLink to='' className='list-footer'>Advance Guide</NavLink></li>
                <li><NavLink to='' className='list-footer'>API Reference</NavLink></li>
                <li><NavLink to='' className='list-footer'>Hooks</NavLink></li>
                <li><NavLink to='' className='list-footer'>Testing</NavLink></li>
                <li><NavLink to='' className='list-footer'>Contributing</NavLink></li>
                <li><NavLink to='' className='list-footer'>FAQ</NavLink></li>
             </ol>
        </Card.Text>
        </Card.Body>
        <Card.Body  className="foo">
          <Card.Title className="footer-head">Community</Card.Title>
          <Card.Text>
            <ol className="footer-list">
                <li><NavLink to='' className='list-footer'>Code of Conduct</NavLink></li>
                <li><NavLink to='' className='list-footer'>Community Resource</NavLink></li>
                
             </ol>
        </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className="cards-div">
        <Card.Body  className="foo">
          <Card.Title className="footer-head">Channels</Card.Title>
          <Card.Text>
          <ol className="footer-list">
                <li><NavLink to='' className='list-footer'>GitHub</NavLink></li>
                <li><NavLink to='' className='list-footer'>Stack Overflow</NavLink></li>
                <li><NavLink to='' className='list-footer'>Discussion Forums</NavLink></li>
                <li><NavLink to='' className='list-footer'>Reactiflux Chat</NavLink></li>
                <li><NavLink to='' className='list-footer'>DEV Community</NavLink></li>
                <li><NavLink to='' className='list-footer'>Facebook</NavLink></li>
                <li><NavLink to='' className='list-footer'>Twitter</NavLink></li>
         </ol>
          </Card.Text>
        </Card.Body>
        <Card.Body className="foo">
          <Card.Title className="footer-head">More</Card.Title>
          <Card.Text>
          <ol className="footer-list">
                <li><NavLink to='' className='list-footer'>Tutorial</NavLink></li>
                <li><NavLink to='' className='list-footer'>Blog</NavLink></li>
                <li><NavLink to='' className='list-footer'>Acknoledgement</NavLink></li>
                <li><NavLink to='' className='list-footer'>Reactive Native</NavLink></li>
                <li><NavLink to='' className='list-footer'>Privacy</NavLink></li>
                <li><NavLink to='' className='list-footer'>Terms</NavLink></li>
            
         </ol>
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
      </div>
    </div>
  );
};

export default Footer;