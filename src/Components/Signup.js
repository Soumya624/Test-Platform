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
  FormControl,
} from "react-bootstrap";
import Img_Registration from "./Images/Registration.png";
function Login() {
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
  var currentvalue = "";
  return (
    <div
      style={{
        padding: "0% 10%",
        fontSize: "90%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        style={{
          boxShadow: "0 8px 6px -6px black",
          border: "none",
          padding: "2%",
          height: "50rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Col md="6">
            <img
              src={Img_Registration}
              alt="Registration"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
          <Col md="6">
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Control
                  type="email"
                  placeholder="Enter Your Name"
                  style={{ borderRadius: "20px" }}
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                />
              </Form.Group>
              <br />
              <Row>
                <Col md="6">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email ID"
                      style={{ borderRadius: "20px" }}
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group controlId="formBasicNumber">
                    <Form.Control
                      type="email"
                      placeholder="Enter Phone Number"
                      style={{ borderRadius: "20px" }}
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md="6">
                  <Form.Group controlId="formBasicEmail">
                    <FormControl
                      type="text"
                      name="discipline"
                      list="discipline"
                      placeholder="Enter Your Discipline"
                      style={{ borderRadius: "20px" }}
                      onChange={(e) => {
                        console.log(e.target.value);
                        currentvalue = e.target.value;
                        console.log(currentvalue);
                      }}
                    />
                    <datalist id="discipline">
                      <option value="Agriculture" />
                      <option value="Allied Health Sciences" />
                      <option value="Anumation, VFX and Gaming Design" />
                      <option value="Architecture" />
                      <option value="Arts" />
                      <option value="Basic Science" />
                      <option value="Commerce" />
                      <option value="Computer Application" />
                      <option value="Dental" />
                      <option value="Design" />
                      <option value="Economics" />
                      <option value="Education" />
                      <option value="Engineering" />
                      <option value="Food Science" />
                      <option value="Law" />
                      <option value="Management" />
                      <option value="Mass Communication" />
                      <option value="Medical" />
                      <option value="Nursing" />
                      <option value="Pharmacy" />
                      <option value="Visual Arts" />
                    </datalist>
                  </Form.Group>
                </Col>
                <Col md="6">
                <Form.Group controlId="formBasicEmail">
                    <FormControl
                      type="text"
                      name="programme"
                      placeholder="Enter Your Programme"
                      style={{ borderRadius: "20px" }}
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <Form.Group controlId="formBasicState">
                <Form.Control
                  type="email"
                  placeholder="Enter Your Sate"
                  style={{ borderRadius: "20px" }}
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                />
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicCity">
                <Form.Control
                  type="email"
                  placeholder="Enter Your City"
                  style={{ borderRadius: "20px" }}
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                />
              </Form.Group>
              <br />
              <p>
                Want to Register as an Admin?
                <a href="/signupadmin" style={{ textDecoration: "none" }}>
                  {" "}
                  Click Here
                </a>
              </p>
              <br />
              <center>
                <Button
                  variant="outline-primary"
                  style={{ margin: "1%", borderRadius: "20px", width: "30%" }}
                  onClick={handleShow}
                >
                  Submit
                </Button>
                <Button
                  variant="outline-primary"
                  style={{ margin: "1%", borderRadius: "20px", width: "30%" }}
                >
                  Cancel
                </Button>
                <p>
                  Already Have an Account?
                  <a href="/login" style={{ textDecoration: "none" }}>
                    {" "}
                    Login
                  </a>
                </p>
              </center>
            </Form>
          </Col>
        </Row>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <center>
            {" "}
            <p>
              <b>OTP Verification</b>
            </p>
          </center>

          <br />
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter the OTP Sent to Your Mobile Number"
              style={{ borderRadius: "20px" }}
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </Form.Group>
          <br />
          <center>
            <Button
              variant="outline-primary"
              style={{ margin: "1%", borderRadius: "20px", width: "30%" }}
              href="/login"
            >
              Submit
            </Button>
            <Button
              variant="outline-primary"
              style={{ margin: "1%", borderRadius: "20px", width: "30%" }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </center>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Login;
