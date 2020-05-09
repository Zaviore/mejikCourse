import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import satu from "../component/images/image.png";
import dua from "../component/images/image2.png";
import tiga from "../component/images/image3.png";
import empat from "../component/images/image4.png";
import lima from "../component/images/image5.png";
import { Course } from "../_action/courses";
import { connect } from "react-redux";

const Content = ({ Course }) => {
  useEffect(() => {
    Course();
  }, []);
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
        <div style={{ padding: 20 }}>
          <Card style={{ width: "12rem" }}>
            <Card.Img variant="top" src={dua} />
            <Card.Body>
              <Card.Title style={{ fontSize: "15px" }}>
                <b>Create Chatbot for Website with React and Node.js</b>
              </Card.Title>
              <Card.Text>Some quick example text to build</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={{ padding: 20 }}>
          <Card style={{ width: "12rem" }}>
            <Card.Img variant="top" src={tiga} />
            <Card.Body>
              <Card.Title style={{ fontSize: "15px" }}>
                <b>Modern JavaScript (from Novice to Ninja)</b>
              </Card.Title>
              <Card.Text>Some quick example text to build</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={{ padding: 20 }}>
          <Card style={{ width: "12rem" }}>
            <Card.Img variant="top" src={empat} />
            <Card.Body>
              <Card.Title style={{ fontSize: "15px" }}>
                <b>Modern JavaScript (from Novice to Ninja)</b>
              </Card.Title>
              <Card.Text>Some quick example text to build</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={{ padding: 20 }}>
          <Card style={{ width: "12rem" }}>
            <Card.Img variant="top" src={satu} />
            <Card.Body>
              <Card.Title style={{ fontSize: "15px" }}>
                <b>Modern JavaScript (from Novice to Ninja)</b>
              </Card.Title>
              <Card.Text>Some quick example text to build</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    courses: state.course,
  };
};
const mapsDispatchToProps = (dispatch) => {
  return {
    Course: () => dispatch(Course()),
  };
};
export default connect(mapStateToProps, mapsDispatchToProps)(Content);
