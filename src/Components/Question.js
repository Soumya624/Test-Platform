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
      <Row style={{ padding: "0%" }}>
        <Col md={9} style={{ padding: "2%" }}>
          <center>
            <Button variant="outline-primary" style={{ borderRadius: "20px" }}>
              Ctrate New
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
