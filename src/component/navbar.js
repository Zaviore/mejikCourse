import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import megik from "../component/images/Logo.svg";
const Navbars = () => {
  return (
    <Navbar className="NVbar">
      <Navbar.Brand href="#home">
        <img src={megik} fill="black" width="50px" height="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">
            <div className="input-container">
              <input className="input-field" type="text" placeholder="Search" />
            </div>
          </Nav.Link>
        </Nav>
        <Form inline>
          <Nav>
            <Nav.Link href="/mycourse" className="navCourse">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                Course
              </div>
            </Nav.Link>

            <Nav.Link eventKey={3} href="/">
              <Button className="btn-prmry">Switch To Instructor View</Button>
            </Nav.Link>
          </Nav>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navbars;
