import React, { useState } from "react";
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
const Input1 = () => {
  return (
    <Row
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2%",
      }}
    >
      <Col xs={6}>
        <Form.Control
          type="text"
          placeholder="Enter the Option"
          style={{ width: "100%" }}
        />
      </Col>
      <Col xs={6}>
        <Form.Check
          type="checkbox"
          label="Is Correct"
          style={{ margin: "1%" }}
        />
      </Col>
    </Row>
  );
};
export default function () {
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);
  const [flag5, setFlag5] = useState(false);
  var name = "Adam";
  var subject = "Physics";
  var description =
    "Objective Questions on Motion in a Frame of Reference of a Particular Body";
  var time = "2 Days Ago";
  var name = "Adam Smith";
  var identity = "Teacher";
  var email = "adamsmith@gmail.com";
  var phone = "1234567890";
  var arrayofQuestionnumber = ["01"];
  var typeofquestion = "";
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = (event) => {
    setInputList(inputList.concat(<Input1 key={inputList.length} />));
  };
  return (
    <div style={{ backgroundColor: "white", overflowX: "hidden" }}>
      <Navbar
        bg="#f5f5f5"
        expand="lg"
        style={{ backgroundColor: "#f5f5f5", padding: "1% 2%" }}
      >
        <Container fluid style={{ backgroundColor: "#f5f5f5" }}>
          <Navbar.Brand href="#">Hello User</Navbar.Brand>
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
              <Button
                variant="outline-primary"
                style={{ borderRadius: "20px" }}
                onClick={() => {
                  window.location.href = "/login";
                }}
              >
                Logout Now
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row style={{ padding: "0%", height: "50rem" }}>
        <Col md={9} style={{ padding: "4%" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicQuestion">
              <Form.Label>Enter Your Question</Form.Label>
              <Form.Control type="email" style={{ height: "5rem" }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAnswer">
              <Form.Label for="type">Choose Your Question Type {""}</Form.Label>
              <select
                id="type"
                name="type"
                style={{
                  margin: "1%",
                  border: "none",
                  borderBottom: "1px solid #d4d9df",
                }}
                onChange={(e) => {
                  console.log(e.target.value);
                  typeofquestion = String(e.target.value);
                  if (typeofquestion === "Single Correct") {
                    setFlag1(1);
                    setFlag2(0);
                    setFlag3(0);
                    setFlag4(0);
                  } else if (typeofquestion === "Multiple Correct") {
                    setFlag1(0);
                    setFlag2(1);
                    setFlag3(0);
                    setFlag4(0);
                  } else if (typeofquestion === "Fill in the Blank") {
                    setFlag1(0);
                    setFlag2(0);
                    setFlag3(1);
                    setFlag4(0);
                  } else if (typeofquestion === "True/False") {
                    setFlag1(0);
                    setFlag2(0);
                    setFlag3(0);
                    setFlag4(1);
                  }
                }}
              >
                <option value="Single Correct">Single Correct</option>
                <option value="Multiple Correct">Multiple Correct</option>
                <option value="True/False">True/False</option>
                <option value="Fill in The Blank">Fill in The Blank</option>
              </select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicTF"
              style={{ display: flag4 ? "block" : "none" }}
            >
              <div>
                <Button
                  variant="outline-primary"
                  style={{ margin: "0%" }}
                  onClick={onAddBtnClick}
                >
                  Add Option
                </Button>
                {inputList}
              </div>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicBlank"
              style={{ display: flag3 ? "block" : "none" }}
            >
              <Form.Label>Enter the Correct Answer</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicSingle"
              style={{ display: flag1 ? "block" : "none" }}
            >
              <div>
                <Button
                  variant="outline-primary"
                  style={{ margin: "0%" }}
                  onClick={onAddBtnClick}
                >
                  Add Option
                </Button>
                {inputList}
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicMultiple"
              style={{ display: flag2 ? "block" : "none" }}
            >
              <div>
                <Button
                  variant="outline-primary"
                  style={{ margin: "0%" }}
                  onClick={onAddBtnClick}
                >
                  Add Option
                </Button>
                {inputList}
              </div>
            </Form.Group>
          </Form>
          <center>
            <br />
            <br />
            <Button
              variant="outline-primary"
              style={{ borderRadius: "20px", margin: "0.5%" }}
            >
              Create New
            </Button>
            <Button
              variant="outline-primary"
              style={{ borderRadius: "20px", margin: "0.5%" }}
            >
              Publish Changes
            </Button>
          </center>
        </Col>
        <Col
          md={3}
          style={{
            backgroundColor: "#f5f5f5",
            padding: "2%",
          }}
        >
          <center>
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
    </div>
  );
}
