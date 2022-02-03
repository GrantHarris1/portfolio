import React from 'react';
import './Projects.css';
import { Carousel, Navbar, Container } from 'react-bootstrap';

export default function Projects() {
    return <div>
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/" className='name' id='name'>Grant Harris</Navbar.Brand>
                <Navbar.Brand href="https://github.com/GrantHarris1"><i className="bi bi-github text-light"></i></Navbar.Brand>
                <Navbar.Brand href="https://www.linkedin.com/in/1grantharris1/"><i className="bi bi-linkedin text-light"></i></Navbar.Brand>
                <Navbar.Brand href="mailto: Grant.Harris.Web@gmail.com"><i className="bi bi-envelope text-light"></i></Navbar.Brand>
                <Navbar.Brand href="/about">About Me</Navbar.Brand>
                <Navbar.Brand href="/projects">Projects</Navbar.Brand>
            </Container>
        </Navbar>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="img/fulltodo.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Todo List App</h3>
                    <p>Made with React & Bootstrap</p>
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
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="img/theshop.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>The Shop App</h3>
                    <p>Made Using Laravel, React, Bootstrap. Site for Electricians to order parts & materials. </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>;
}
