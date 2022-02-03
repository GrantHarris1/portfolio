import React from 'react';
import './Projects.css';
import { Carousel, Navbar, Container, Nav } from 'react-bootstrap';

export default function Projects() {
    return <div>
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/" className='name' id='name'>Grant Harris</Navbar.Brand>
                <Navbar.Brand href="https://github.com/GrantHarris1"><i className="bi bi-github text-light"></i></Navbar.Brand>
                <Navbar.Brand href="https://www.linkedin.com/in/1grantharris1/"><i className="bi bi-linkedin text-light"></i></Navbar.Brand>
                <Navbar.Brand href="mailto: Grant.Harris.Web@gmail.com"><i className="bi bi-envelope text-light"></i></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/about">About Me</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <h1>Projects</h1>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="img/theshop.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>The Shop App</h3>
                    <p>Made Using Laravel, React, Bootstrap.
                        Site for Electricians to order parts &
                        materials. </p><a href='https://the-shop-app-f2eea.web.app/conduit'><i className="bi bi-link-45deg text-light"></i></a>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="img/fulltodo.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Todo List App</h3>
                    <p>Made with React & Bootstrap</p>
                    <a href='https://todo-list-67656.web.app/'><i className="bi bi-link-45deg text-light"></i>
                    </a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="img/hooks.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Fishing Store Mock</h3>
                    <p>Using React w/hooks, Bootstrap, using an API</p>
                    <a href='https://react-hooks-store-f6cf4.web.app/'><i className="bi bi-link-45deg text-light"></i>
                    </a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="img/fullmenu.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Resturant App</h3>
                    <p>Made Using React, Rendering based on time calling Multiple APIs.</p>
                    <a href='https://menu-65537.web.app/'><i className="bi bi-link-45deg text-light"></i>
                    </a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br />
        <h4 className='text-light proj text-center'> These projects were made using react for front end development. <br /> Laravel was used for the back end.
            I have many more projects on my<a href='https://github.com/GrantHarris1'> Github</a> account. <br />Thank you for checking them out.</h4>
    </div>;
}
