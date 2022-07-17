import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
import moment from "moment";
import { Link } from "react-router-dom";
import Img_Demo from "./Images/Registration.jpg";
import { getTestById } from "./Teacher/actions";

export default function () {
  var name = "Adam";
  var subject = "Physics";
  var description = "2022-04-13 10:00 AM to 2022-04-14 10:00 AM";
  var time = "2 Days Ago";
  var name = "Adam Smith";
  var identity = "Student";
  var email = "adamsmith@gmail.com";
  var marks_obtained = "";
  var phone = "1234567890";
  const headers = {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU5MDYyNTE1LCJpYXQiOjE2NTc3NjY1MTUsImp0aSI6IjIyNzE5MGUzYmQzYzQ3M2VhZGNiOTQ3Yjc3ZDE4Mjk3IiwidXNlcl9pZCI6MzMsInVzZXJuYW1lIjoic3ViaG9qaXQ5NzA0ZGV5QGdtYWlsLmNvbSIsImVtYWlsIjoic3ViaG9qaXQ5NzA0ZGV5QGdtYWlsLmNvbSJ9.-hQv6xMU_vy3xB0TJCIJrli4OxUJ4BDfkLxm9Tr4VZA",
    "Content-Type": "application/json",
  };

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setButtonClick(false);
  };
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

  const [tests, setTests] = useState([]);
  const [test_id, setTestId] = useState(null);
  const [test_name, setTestName] = useState(null);
  const [question_id, setQuestionId] = useState(null);
  const [instructions, setInstructions] = useState(null);
  const [check_attempts, setCheckAttempts] = useState(null);
  const [marks, setMarks] = useState(null);
  const [buttonclick, setButtonClick] = useState(false);

  function checkAttempts(id) {
    axios
      .get(`/api/check_attempts/${id}/`, {
        headers: headers,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          if (res.data === "You have already submitted")
            setCheckAttempts(false);
          if (res.data === "Can attempt") setCheckAttempts(true);
        }
      });
  }
  function viewResult(id) {
    axios
      .get(`/api/result/${id}/`, {
        headers: headers,
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.data[res.data.length - 1].marks_obtained);
        setMarks(res.data[res.data.length - 1].marks_obtained);
        setButtonClick(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/api/tests_students/", {
        headers: headers,
      })
      .then((res) => {
        if (res.status === 200) {
          setTests(res.data.alloted_test);
        }
      });
  }, []);

  function getQuestionPaper() {
    dispatch(
      getTestById(test_id, (res) => {
        if (res.status === 200) {
          window.location.href = `/answer/${test_id}/${question_id}`;
        }
      })
    );
  }

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
            {tests.map((test) => {
              return (
                <Col md={4}>
                  <Card className="text-center" style={{ margin: "1%" }}>
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                      <Card.Title>{test.name}</Card.Title>
                      <Card.Text style={{ textAlign: "justify" }}>
                        Students are requested to click on the button below to
                        start the exam
                      </Card.Text>
                      <br />
                      <Button
                        disabled={test.questions.length === 0}
                        variant="outline-primary"
                        style={{ borderRadius: "20px" }}
                        onClick={() => {
                          setTestName(test.name);
                          setInstructions(test.instructions);
                          setTestId(test.unique_id);
                          // console.log(test.questions)
                          setQuestionId(test.questions[0]);
                          handleShow();

                          checkAttempts(test.unique_id);
                        }}
                      >
                        Give Test
                      </Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                      {/* {test.exam_start_time && test.exam_start_time
                        ? `${test.exam_start_time} - ${test.exam_end_time}`
                        : ""} */}
                      {moment(test.exam_start_time).format(
                        "MMMM Do YYYY hh:mm:ss"
                      )}{" "}
                      -{" "}
                      {moment(test.exam_end_time).format(
                        "MMMM Do YYYY hh:mm:ss"
                      )}
                    </Card.Footer>
                  </Card>
                </Col>
              );
            })}
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
            <h3>{test_name}</h3>
            <p>
              Students are requested to click on the button below to start the
              exam
            </p>
          </center>
          <br />
          <p>
            <b>Instructions</b>
          </p>
          <p>{instructions}</p>
          <br />
          <br />
          <center>
            <b style={{ display: buttonclick !== true ? "none" : "" }}>
              Marks Obtained: {marks}
            </b>
          </center>
          <br />
          <center>
            <Button
              disabled={!check_attempts}
              variant="outline-primary"
              style={{ borderRadius: "20px", margin: "0.5%" }}
              onClick={() => {
                getQuestionPaper();
              }}
            >
              Start Exam
            </Button>
            <Button
              disabled={check_attempts}
              variant="outline-primary"
              style={{ borderRadius: "20px", margin: "0.5%" }}
              onClick={() => {
                // getQuestionPaper();
                viewResult(test_id);
              }}
            >
              View Result
            </Button>
          </center>
        </Modal.Body>
      </Modal>
    </div>
  );
}
