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
  var identity = "Student";
  var email = "adamsmith@gmail.com";
  var phone = "1234567890";
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
          <Row>
            <Col md={4}>
              <Card className="text-center" style={{ margin: "1%" }}>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>{subject}</Card.Title>
                  <Card.Text style={{ textAlign: "justify" }}>
                    {description}
                  </Card.Text>
                  <br />
                  <Button
                    variant="outline-primary"
                    style={{ borderRadius: "20px" }}
                    href="/answer"
                  >
                    Give Test
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted">{time}</Card.Footer>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center" style={{ margin: "1%" }}>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>{subject}</Card.Title>
                  <Card.Text style={{ textAlign: "justify" }}>
                    {description}
                  </Card.Text>
                  <br />
                  <Button
                    variant="outline-primary"
                    style={{ borderRadius: "20px" }}
                    href="/answer"
                  >
                    Give Test
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted">{time}</Card.Footer>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center" style={{ margin: "1%" }}>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>{subject}</Card.Title>
                  <Card.Text style={{ textAlign: "justify" }}>
                    {description}
                  </Card.Text>
                  <br />
                  <Button
                    variant="outline-primary"
                    style={{ borderRadius: "20px" }}
                    href="/answer"
                  >
                    Give Test
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted">{time}</Card.Footer>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={4}>
              <Card className="text-center" style={{ margin: "1%" }}>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>{subject}</Card.Title>
                  <Card.Text style={{ textAlign: "justify" }}>
                    {description}
                  </Card.Text>
                  <br />
                  <Button
                    variant="outline-primary"
                    style={{ borderRadius: "20px" }}
                    href="/answer"
                  >
                    Give Test
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted">{time}</Card.Footer>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center" style={{ margin: "1%" }}>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>{subject}</Card.Title>
                  <Card.Text style={{ textAlign: "justify" }}>
                    {description}
                  </Card.Text>
                  <br />
                  <Button
                    variant="outline-primary"
                    style={{ borderRadius: "20px" }}
                    href="/answer"
                  >
                    Give Test
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted">{time}</Card.Footer>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center" style={{ margin: "1%" }}>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>{subject}</Card.Title>
                  <Card.Text style={{ textAlign: "justify" }}>
                    {description}
                  </Card.Text>
                  <br />
                  <Button
                    variant="outline-primary"
                    style={{ borderRadius: "20px" }}
                    href="/answer"
                  >
                    Give Test
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted">{time}</Card.Footer>
              </Card>
            </Col>
          </Row>
          <br />
          <br />
          <br />
        </Col>
        <Col
          md={3}
          style={{
            backgroundColor: "#f5f5f5",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <center>
            <br />
            <br />
            <img src={Img_Demo} style={{ width: "50%", borderRadius: "50%" }} />
            <br />
            <br />
            <br />
            <p style={{ marginTop: "0", marginBottom: "0" }}>
              <b>Name: </b>
              {name}
            </p>
            <p style={{ marginTop: "0", marginBottom: "0" }}>
              <b>Identity: </b>
              {identity}
            </p>
            <p style={{ marginTop: "0", marginBottom: "0" }}>
              <b>Phone: </b>
              {phone}
            </p>

            <p style={{ marginTop: "0", marginBottom: "0" }}>
              <b>Email: </b>
              {email}
            </p>
            <br />
            <br />

            <Button variant="outline-primary" style={{ borderRadius: "20px" }}>
              Edit Profile
            </Button>
          </center>
        </Col>
      </Row>
    </div>
  );
}
