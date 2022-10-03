import React from 'react'
import {NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Components/logo1.png'
import './Header.css'

function NavScrollExample() {
  return (
    <Navbar color='white' expand="lg" className='nav-bar'>
      <Container fluid >
        <NavLink to="/"><img src={logo} alt="Logo" className='image-logo'/></NavLink>
        <Navbar.Toggle aria-controls="" />
        <Navbar.Collapse id="">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/docs" className='list'>Docs</NavLink>
            <NavLink to="/tutorial" className='list'>Tutorial</NavLink>
            <NavLink to="blog" className='list'>Blog</NavLink>
            <NavLink to="community" className='list'>Community</NavLink>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
            />
            <Button variant="outline-success" className='list'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;