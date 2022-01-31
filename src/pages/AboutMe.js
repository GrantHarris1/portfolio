import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './AboutMe.css';
export default function AboutMe() {
  return <div className='about text-center'>
      <Navbar bg="light" expand="lg">
  <Container className='text-dark'>
    <Navbar.Brand href="/" className='name' id ='name'>Grant Harris</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown title="Navigate" id="basic-nav-dropdown">
          <NavDropdown.Item href="https://github.com/GrantHarris1">GitHub</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      <h2>Web Developer</h2>
            <p>
                HTML | CSS | JavaScript | React | Bootstrap | React Bootstrap | O.O.P.
                | Agile | Git | Github | Laravel |Wordpress | Social Media
            </p>
            <br />

            <h4>
                 Thank you for visiting this page.<br />
                 Grant Harris is a Full Stack Web Developer based in Lexington, Ky.
            </h4>
            <br />
            <br />
            <h2  className=''>Education:</h2>
            <h4>
             Aweseome Inc. - Full Stack Web Development <br />
             Graduation: December 2021<br />
             
             I.E.C. of the Bluegrass - Electrician Studies
             Graduation: March 2015
            </h4>
            <br />
            <br />
            <h2  className=''>Work History:</h2>
            <h4 className=''>
                Current: Full Stack Web Developer | Social Media Manager | Content Creation <br />
                2008 - 2021 Licensed Electrician <br />
                2006 -2008 Factory Work <br />
                2003 - 2006 US Army (52D) | Power Generation Technician <br />
            </h4>
            <br />
            <br />
            <h2  className=''>Family Life:</h2>

            <h4 className=''>
                Grant has lived in Kentucky most of his life and is passionate about this state.<br />
                His five Children are Chad, Madison, Sylas, Mckenna, and Iley.<br />
                Grant has been maried to his wife Brittany for 18 years.
            </h4>
  </div>;
}