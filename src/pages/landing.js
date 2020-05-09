import React from "react";
import { Link } from "react-router-dom";
import megik from "../component/images/Logography.svg";
import { Form, Button } from "react-bootstrap";

const Landing = () => {
  return (
    <div className="warp">
      <div className="container">
        <div style={{ textAlign: "center", color: "white" }}>
          <img src={megik} alt="megik" width="100px" />
          <h3>Login</h3>
          <div>
            login and start managing your learning <br /> procces!
          </div>
        </div>
        <div className="warping-1">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <b style={{ color: "white" }}>Email</b>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="input-login"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>
                <b style={{ color: "white" }}>Password</b>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="input-login"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Keep me signed in" />
            </Form.Group>
            <Link to="/home">
              <Button type="submit" className="btn-yellow">
                Login
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Landing;
