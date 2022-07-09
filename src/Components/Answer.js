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
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Img_Demo from "./Images/Registration.jpg";
export default function () {
  var type = "Single";
  var positive = 3;
  var negative = 2;
  var arrayofQuestionnumber = ["01"];
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
    <div style={{ backgroundColor: "white", overflowX: "hidden" }}>
      <Navbar
        bg="#f5f5f5"
        expand="lg"
        style={{ backgroundColor: "#f5f5f5", padding: "1% 2%" }}
      >
        <Container fluid style={{ backgroundColor: "#f5f5f5" }}>
          <Navbar.Brand href="#">Select {type} Correct Answer</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{
                maxHeight: "100px",
              }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              {/* <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#">Contact Us</Nav.Link> */}
              +{positive} For Right Answer/-{negative} For Wrong Answer
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row style={{ padding: "0%", height: "50rem" }}>
        <Col md={9} style={{ padding: "4%" }}>
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
          <Row
            style={{
              width: "100%",
              margin: "0",
              display: window.innerWidth < 768 ? "" : "none",
            }}
          >
            <Row style={{margin:"0.5%"}}>
              <Col xs={6}>
                <Button
                  style={{
                    backgroundColor: "#68b45a",
                    color: "white",
                    border: "none",
                    margin: "0.5% 0.5% 0.5% 1%",
                    fontSize: "100%",
                    width:"100%"
                  }}
                >
                  Save & Next
                </Button>
              </Col>
              <Col xs={6}>
                <Button
                  style={{
                    backgroundColor: "#7b449e",
                    color: "white",
                    border: "none",
                    margin: "0.5%",
                    fontSize: "100%",
                    width:"100%"
                  }}
                >
                  Mark for Review & Next
                </Button>
              </Col>
            </Row>
            <Row  style={{margin:"0.5%"}}>
              <Col xs={6}>
                <Button
                  style={{
                    backgroundColor: "#ffffff",
                    color: "black",
                    borderColor: "black",
                    margin: "0.5%",
                    fontSize: "100%",
                    width:"100%"
                  }}
                >
                  Clear Response
                </Button>
              </Col>
              <Col xs={6}>
                <Button
                  style={{
                    backgroundColor: "#68b45a",
                    color: "white",
                    border: "none",
                    margin: "0.5% 1% 0.5% 0.5%",
                    fontSize: "100%",
                    width:"100%"
                  }}
                >
                  Submit & Close
                </Button>
              </Col>
            </Row>
          </Row>
        </Col>
        <Col
          md={3}
          style={{
            backgroundColor: "#f5f5f5",
            padding: "2%",
          }}
        >
          <Row style={{ padding: "4%" }}>
            <Row style={{ padding: "2%" }}>
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
                Not Attempt
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
                Not Answer
              </Col>
            </Row>
            <Row style={{ padding: "2%" }}>
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
          <center>
            <p>
              <b>Your Questions</b>
            </p>
            <Row>
              <Col xs={1}></Col>
              <Col xs={2}>
                <Button
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "white",
                    borderColor: "black",
                    color: "black",
                  }}
                >
                  01
                </Button>{" "}
              </Col>
              <Col xs={2}>
                <Button
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "white",
                    borderColor: "black",
                    color: "black",
                  }}
                >
                  02
                </Button>{" "}
              </Col>
              <Col xs={2}>
                <Button
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "white",
                    borderColor: "black",
                    color: "black",
                  }}
                >
                  03
                </Button>{" "}
              </Col>
              <Col xs={2}>
                <Button
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "white",
                    borderColor: "black",
                    color: "black",
                  }}
                >
                  04
                </Button>{" "}
              </Col>
              <Col xs={2}>
                <Button
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "white",
                    borderColor: "black",
                    color: "black",
                  }}
                >
                  05
                </Button>{" "}
              </Col>
              <Col xs={1}></Col>
            </Row>
          </center>
        </Col>
      </Row>
      <Row
        style={{
          backgroundColor: "#f5f5f5",
          position: "fixed",
          bottom: "0",
          width: "100%",
          margin: "0",
          display: window.innerWidth > 768 ? "" : "none",
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
                fontSize: "100%",
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
                fontSize: "100%",
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
                fontSize: "100%",
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
              fontSize: "100%",
            }}
          >
            Submit & Close
          </Button>
        </Col>
      </Row>
    </div>
  );
}
