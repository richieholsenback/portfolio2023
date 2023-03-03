import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css'

export const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="transparent">
                <Container 
                    id="navbar"
                >
                    <Navbar.Brand href='/' id="navHeader1" >Richie Holsenback</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav id="nav-choices" defaultActiveKey="/" as="ul" >
                            {/* <div id="navbar">
                                <div > */}
                                    <Nav.Link id="navtext" href="/work">Work</Nav.Link>
                                    <Nav.Link id="navtext" href="/resume">Résumé</Nav.Link>
                                    <Nav.Link id="navtext" href="/contact">Contact</Nav.Link>
                                    <Nav.Link id="navtext" href="/fun">Fun</Nav.Link>
                                    {/* <Nav.Item className="navbar__item">
                                        <Link className="navbar__link" to="/resume">
                                            <h4 id="navtext">Résumé</h4>
                                        </Link>
                                    </Nav.Item>
                                    <Nav.Item className="navbar__item">
                                        <Link className="navbar__link" to="/contact">
                                            <h4 id="navtext">Contact</h4>
                                        </Link>
                                    </Nav.Item>
                                    <Nav.Item className="navbar__item">
                                        <Link className="navbar__link" to="/fun">
                                            <h4 id="navtext">Fun</h4>
                                        </Link>
                                    </Nav.Item> */}
                                {/* </div>
                            </div> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <img id="headerBG" src={photo} width="100%" alt="header art"/> */}
        </>
    );
    //   return (
    //     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //       <Container>
    //         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //         <Navbar.Collapse id="responsive-navbar-nav">
    //           <Nav className="me-auto">
    //             <Nav.Link href="#features">Features</Nav.Link>
    //             <Nav.Link href="#pricing">Pricing</Nav.Link>
    //             <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //               <NavDropdown.Item href="#action/3.2">
    //                 Another action
    //               </NavDropdown.Item>
    //               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //               <NavDropdown.Divider />
    //               <NavDropdown.Item href="#action/3.4">
    //                 Separated link
    //               </NavDropdown.Item>
    //             </NavDropdown>
    //           </Nav>
    //           <Nav>
    //             <Nav.Link href="#deets">More deets</Nav.Link>
    //             <Nav.Link eventKey={2} href="#memes">
    //               Dank memes
    //             </Nav.Link>
    //           </Nav>
    //         </Navbar.Collapse>
    //       </Container>
    //     </Navbar>
    //   );
}