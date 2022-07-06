import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  NavDropdown,
  NavbarBrand,
  Carousel,
  CarouselItem,
  CarouselControl,
  Card,
  Row,
  Col,
  Modal,
} from "react-bootstrap";

function Login() {
  var type = "Single";
  var positive = 3;
  var negative = 2;
  var arrayOne = ["HTML", "CSS", "JavaScript"];
  var arrayTwo = ["HTML", "CSS", "JavaScript"];
  var numberofUnanswered = 0;
  var numberofAnswered = 0;
  var numberofUnattempted = 0;
  var numberofMarkedforreview = 0;
  var arrayofQuestionnumber = ["01"];
  var question =
    "A horizontal force F is applied at the centre of mass of a cylindrical object of mass m and radius R, perpendicular to its axis as shown in the figure. The coefficient of friction between the object and the ground is. The centre of mass of the object has an acceleration a. The acceleration due to gravity is g. Given that the object rolls without slipping, which of the following statement(s) is(are) correct?";
  return (
    <Card
      style={{
        border: "none",
        height: "60vw",
      }}
    >
      <Row>
        <Col xs={9} style={{ height: "60vw" }}>
          <Row
            style={{
              padding: "1%",
              backgroundColor: "#f5f5f5",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Col xs={6} style={{ textAlign: "left" }}>
              <p>Select {type} Correct Answer</p>
            </Col>
            <Col xs={6} style={{ textAlign: "right" }}>
              <p>
                +{positive} For Right Answer/-{negative} For Wrong Answer
              </p>
            </Col>
          </Row>
          <br />
          <p style={{ margin: "2%" }}>{question}</p>
          <br />
          <Form
            style={{
              margin: "2%",
              display: type === "Single" ? "block" : "none",
            }}
          >
            {arrayOne.map((item, index) => {
              return (
                <div>
                  <input
                    type="radio"
                    id={item}
                    name="fav_language"
                    value={item}
                  />
                  <label for={item}>&nbsp;{item}</label>
                </div>
              );
            })}
          </Form>
          <Form
            style={{
              margin: "2%",
              display: type === "Multiple" ? "block" : "none",
            }}
          >
            {arrayTwo.map((item, index) => {
              return (
                <div>
                  <input
                    type="checkbox"
                    id={item}
                    name="fav_language"
                    value={item}
                  />
                  <label for={item}>&nbsp;{item}</label>
                </div>
              );
            })}
          </Form>
          <Form
            style={{
              margin: "2%",
              display: type === "Text" ? "block" : "none",
            }}
          >
            <input
              type="text"
              placeholder="Enter Your Answer"
              style={{
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
                borderBottom: "1px solid black",
                width: "70%",
                padding: "1%",
              }}
            />
          </Form>
          <br />
        </Col>
        <Col
          xs={3}
          style={{ backgroundColor: "#f5f5f5", padding: "2%", height: "60vw" }}
        >
          <br />
          <Row>
            <Row style={{ padding: "1%" }}>
              <Col xs={6}>
                <Button
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "white",
                    borderColor: "black",
                    color: "black",
                  }}
                >
                  {numberofUnattempted}
                </Button>{" "}
                Not Attempted
              </Col>
              <Col xs={6}>
                <Button
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#c6462f",
                    border: "none",
                  }}
                >
                  {numberofUnanswered}
                </Button>{" "}
                Not Answered
              </Col>
            </Row>
            <Row style={{ padding: "1%" }}>
              <Col xs={6}>
                <Button
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#68b45a",
                    border: "none",
                  }}
                >
                  {numberofAnswered}
                </Button>{" "}
                Answered
              </Col>
              <Col xs={6}>
                <Button
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#7b449e",
                    border: "none",
                  }}
                >
                  {numberofMarkedforreview}
                </Button>{" "}
                For Review
              </Col>
            </Row>
          </Row>
          <br />
          <br />
          <Row>
            <p>Your Questions</p>
            {arrayofQuestionnumber.map((item, index) => {
              return (
                <div>
                  <Button
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "white",
                      borderColor: "black",
                      color: "black",
                    }}
                  >
                    {item}
                  </Button>{" "}
                </div>
              );
            })}
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "#f5f5f5",
          position: "fixed",
          bottom: "0",
          width: "100%",
          margin: "0",
        }}
      >
        <Col xs={8}>
          <div style={{ display: "flex" }}>
            <Button
              style={{
                backgroundColor: "#68b45a",
                color: "white",
                border: "none",
                margin: "0.5% 0.5% 0.5% 1%",
              }}
            >
              Save & Next
            </Button>
            <Button
              style={{
                backgroundColor: "#7b449e",
                color: "white",
                border: "none",
                margin: "0.5%",
              }}
            >
              Mark for Review & Next
            </Button>
            <Button
              style={{
                backgroundColor: "#ffffff",
                color: "black",
                borderColor: "black",
                margin: "0.5%",
              }}
            >
              Clear Response
            </Button>
          </div>
        </Col>
        <Col xs={4} style={{ textAlign: "right" }}>
          <Button
            style={{
              backgroundColor: "#68b45a",
              color: "white",
              border: "none",
              margin: "0.5% 1% 0.5% 0.5%",
            }}
          >
            Submit & Close
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default Login;
