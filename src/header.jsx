import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import App from "./App";
import About from "./components/about";
import Contact from "./components/contact";
import Blog from "./components/blog";
import Profile from "./components/profile";
import WritePost from "./components/writepost";

export default class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand>
                <NavLink exact activeStyle={{color:'orange'}} to="/">SrhDP</NavLink>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link>
                    <NavLink activeStyle={{color:'orange'}} to="/about">About Us</NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink activeStyle={{color:'orange'}} to="/contact">Contact Us</NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink activeStyle={{color:'orange'}} to="/blog">Blog</NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink activeStyle={{color:'orange'}} to="/profile">Profile</NavLink>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/writepost">
            <WritePost />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    );
  }
}
