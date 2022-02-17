import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './AboutMe.css';
export default function AboutMe() {
  return <div className='about text-center'>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/" className='name' id='name'>Grant Harris</Navbar.Brand>
        <Navbar.Brand href="https://github.com/GrantHarris1"><i className="bi bi-github text-light"></i></Navbar.Brand>
        <Navbar.Brand href="https://www.linkedin.com/in/1grantharris1/"><i className="bi bi-linkedin text-light"></i></Navbar.Brand>
        <Navbar.Brand href="mailto: Grant.Harris.Web@gmail.com"><i className="bi bi-envelope text-light"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='About' >
      <h1 className='text-light'>About Me <i className="bi bi-arrow-down-circle text-light"></i></h1>
      <div className="main">
        <div className="d1"></div>
        <div className="d2"></div>
        <div className="d3"></div>
        <div className="d4"></div>
      </div>
      <br />
      <h2 className=''>Web Developer:</h2>
      <p>
        HTML | CSS | JavaScript | React | Bootstrap | React Bootstrap | O.O.P.
        | Agile Development | Git | Github | Laravel | Jira | C# | Wordpress | Social Media
      </p>

      <h4>
        Thank you for visiting this page.<br />
        Grant Harris is a Full Stack Web Developer based in Lexington, Ky.
      </h4>
      <br />
      <br />
      <h2 className=''>Education:</h2>
      <h4>
        Aweseome Inc. - Full Stack Web Development <br />
        Graduation: December 2021<br />

        I.E.C. of the Bluegrass - Electrician Studies
        Graduation: March 2015
      </h4>
      <br />
      <br />
      <h2 className=''>Work History:</h2>
      <h4 className=''>
        Current: QA / Developer @ BlueFrame Technology <br />
        2008 - 2021 Licensed Electrician <br />
        2006 -2008 Factory Work <br />
        2003 - 2006 US Army (52D) - Power Generation Technician <br />
      </h4>
      <br />
      <br />
      <h2 className=''>Family Life:</h2>

      <h4 className=''>
        Grant has lived in Kentucky most of his life and is passionate about this state.<br />
        His five Children are Chad, Madison, Sylas, Mckenna, and Iley.<br />
        Grant has been married to his wife Brittany for 18 years.
      </h4>
    </div>
  </div>;
}
