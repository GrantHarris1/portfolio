import React from 'react';
import { Navbar, Nav, Container, Card } from 'react-bootstrap';
import './Blog.css';
export default function Blog() {
    return <div className='text-light text-center justify-content center About' >
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
                        <Nav.Link href="/about">About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <h1>Blog</h1>
        <Container >
            <Card style={{ width: '100%' }} className='text-center'>
                <Card.Body>
                    <Card.Title><h1 className='About' id='blog'>January</h1></Card.Title>
                    <Card.Subtitle className="mb-2 text-light About">First Month At Tech Job.</Card.Subtitle>
                    <Card.Text>
                        <p className='About'> The first Month has been interesting. Working in Sports Tech is a true dream come true for me. Truly my two passions combined. The relaxed atmosphere is
                            <br /> something I will have to adjust to.
                            When I asked "what time do I come in?", I was answered with "whenever works best for you."
                            When I asked who My boss was, I was<br /> anwered with "You don't really have one. "Lunch?" I asked. "Whatever works
                            for you." was the answer. This was pretty exciting for me coming from blue collar work.<br /> The tech stack here 
                            includes C# for front-end, which I am not familiar with. Obviously this will be a learning hill for me. I am in a QA role so this includes<br />
                            lots of software testing. It is going well so far, there is still so much to learn. Mosty everyone has been really cool so far. <br />
                            I'm looking forward to the next month as we are building a new testing program in C#.

                        </p>
                    </Card.Text>
                    <br />
                    <p>This is my current job:</p>
                    <Card.Link href="https://www.blueframetech.com/">BlueFrame Tech.</Card.Link>
                </Card.Body>
            </Card>
        </Container>
    </div>;
}
