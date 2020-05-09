import React from "react";
import { Card } from "react-bootstrap";
import lima from "../component/images/image5.png";
const Content2 = () => {
  return (
    <div className="containers">
      <div
        style={{ display: "flex", flexWrap: "wrap", alignContent: "center" }}
      >
        <div style={{ padding: 20 }}>
          <Card style={{ width: "12rem" }}>
            <Card.Img variant="top" src={lima} />
            <Card.Body>
              <Card.Title style={{ fontSize: "15px" }}>
                <b>The Complete 2020 Web Development Bootcamp</b>
              </Card.Title>
              <Card.Text>Some quick example text to build</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Content2;
