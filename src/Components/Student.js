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
export default function () {
  var name = "Adam";
  var subject = "Physics";
  var description = "2022-04-13 10:00 AM to 2022-04-14 10:00 AM";
  var time = "2 Days Ago";
  var name = "Adam Smith";
  var identity = "Student";
  var email = "adamsmith@gmail.com";
  var phone = "1234567890";
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setShow1(false);
  };
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => {
    setShow1(true);
    setShow(false);
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
                    onClick={handleShow}
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
                    onClick={handleShow}
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
                    onClick={handleShow}
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
                    onClick={handleShow}
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
                    onClick={handleShow}
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
                    onClick={handleShow}
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Body style={{ padding: "5%" }}>
          <center>
            <h3>{subject}</h3>
            <p>{description}</p>
          </center>
          <br />
          <p>
            <b>Instructions</b>
          </p>
          <p style={{ margin: "0" }}>
            1. The examination will comprise of objective type questions
          </p>
          <p style={{ margin: "0" }}>
            2. All questions are compulsory and each carries One mark
          </p>
          <p style={{ margin: "0" }}>
            3. You will be given 15 minutes to complete the examination
          </p>
          <p style={{ margin: "0" }}>
            4. You will be given a notification when the time is up
          </p>
          <br />
          <br />
          <center>
            <Button
              variant="outline-primary"
              style={{ borderRadius: "20px" }}
              href="/answer"
            >
              Start Exam
            </Button>
          </center>
        </Modal.Body>
      </Modal>
    </div>
  );
}
