import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addTest
} from './actions'

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
import Img_Demo from "../Images/Registration.jpg";
import TestCreated from "./TestCreated";

var data = {
  name: "",
  instruction: "",
  questions: [],
  isFixed: true,
  exam_start_time: null,
  exam_end_time: null,
  show_result: true,
  students: [],
};

export default function () {

  const dispatch = useDispatch()

  var name = "Adam";
  var subject = "Physics";
  var description = "2022-04-13 10:00 AM to 2022-04-14 10:00 AM";
  var time = "2 Days Ago";
  var name = "Adam Smith";
  var identity = "Teacher";
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

  const [isfixed, setIsFixed] = useState(false)
  const [ test_id, setTestId ] = useState(null)

  function createTest() {
    console.log(submitData)
    dispatch(
      addTest(submitData,(res)=>{
        if(res.status === 201){
          console.log(res)
          window.location = `/question/${res.data.unique_id}`
        }else{
          console.log(res)
        }
      })
    )
  }

  // Enter Subject
  const [submitData, setSubmitData] = useState(data);
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
            <TestCreated
              subject={subject}
              description={description}
              time={time}
              handleShow={handleShow}
            />
          </Row>
          <br />
          <br />
          <br />
          <br />
          <center>
            <Button
              variant="outline-primary"
              style={{ borderRadius: "20px" }}
              onClick={handleShow1}
            >
              Create New
            </Button>
          </center>
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
              style={{ borderRadius: "20px", margin: "0.5%" }}
              href="/question"
            >
              Edit Exam
            </Button>
            <Button
              variant="outline-primary"
              style={{ borderRadius: "20px", margin: "0.5%" }}
            >
              View Result
            </Button>
          </center>
        </Modal.Body>
      </Modal>
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Body style={{ padding: "5%" }}>
          <center>
            <p>
              <b>Please Fill the Exam Details</b>
            </p>
          </center>
          <br />
          <Form.Group className="mb-3" controlId="formBasicSingle">
            <Form.Label>Test Name</Form.Label>
            <Form.Control
              autoComplete="off"
              type="text"
              onChange={(e) => {
                submitData.name = e.target.value;
                setSubmitData(submitData);
              }}
            />
            <br />
            <Row>
              <Col xs={6}>
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  disabled = {!isfixed}
                  type="datetime-local"
                  onChange={(e) => {
                  	submitData.exam_start_time = e.target.value
                  	setSubmitData(submitData)
                  }}
                />
              </Col>
              <Col xs={6}>
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  disabled = {!isfixed}
                  type="datetime-local"
                  onChange={(e) => {
                  	submitData.exam_start_time = e.target.value
                  	setSubmitData(submitData)
                  }}
                />
              </Col>
            </Row>
            <br />
            <Form.Label>Specify Instructions</Form.Label>
            <Form.Control
              type="text"
              autoComplete="off"
              required={true}
              onChange={(e) => {
                submitData.instruction = e.target.value;
                setSubmitData(submitData);
              }}
              style={{ height: "5rem" }}
            />
            <br />
            <Form.Check type="checkbox" label="Show Results" onChange={e=>{
              submitData.show_result = e.target.checked
              setSubmitData(submitData)
            }} />
            <Form.Check type="checkbox" label="Fixed" onChange={e=>{
              setIsFixed(e.target.checked)
              submitData.isFixed = e.target.checked
              setSubmitData(submitData)
            }} />
          </Form.Group>
          <br />
          <center>
            <Button
              onClick={(e) => {
                createTest();
              }}
              variant="outline-primary"
              style={{ borderRadius: "20px" }}
            >
              Create Test
            </Button>
          </center>
        </Modal.Body>
      </Modal>
    </div>
  );
}
