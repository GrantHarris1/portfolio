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
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="img/hooks.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="img/fullmenu.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>;
}
