import React from 'react';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar'
import {Container, Nav} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Buysell from './buy-sell';
import Blog from './Blog';
import './Header-style.css'

function Header() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar bg="white" expand="lg">

    <Container>
      <img src='logo.png' alt=' ' style={{height: "80px"}}/>
    <Navbar.Brand className="nav-link urban" as={Link} to="/" >Urban Reach</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    <Nav className="me-auto">
      <Nav.Link className="nav-link home" as={Link} to="/" >Home</Nav.Link>
      <Nav.Link className="nav-link" as={Link} to="/about" >About Us</Nav.Link>
      <Nav.Link className="nav-link" as={Link} to="/buysell" >Buy/Sell </Nav.Link>
      <Nav.Link className="nav-link" as={Link} to="/Blog" >Blog </Nav.Link>
      <Nav.Link className="nav-link" as={Link} to="/Contact" >Contact </Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
    
  </Navbar>
    
<div>
  <Routes>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/" element={<Home />}/>
    <Route path="/buysell" element={<Buysell/>}/>
    <Route path="/blog" element={<Blog/>}/>
  </Routes>
</div>
    </div>
    </BrowserRouter>
  );
}

export default Header;
