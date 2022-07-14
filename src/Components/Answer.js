import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { Link, useParams, useNavigate } from "react-router-dom";
import Img_Demo from "./Images/Registration.jpg";
import { getQuestionById } from "./Teacher/actions";
import axios from "axios";

const headers = {
  Authorization:
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU5MDYyNTE1LCJpYXQiOjE2NTc3NjY1MTUsImp0aSI6IjIyNzE5MGUzYmQzYzQ3M2VhZGNiOTQ3Yjc3ZDE4Mjk3IiwidXNlcl9pZCI6MzMsInVzZXJuYW1lIjoic3ViaG9qaXQ5NzA0ZGV5QGdtYWlsLmNvbSIsImVtYWlsIjoic3ViaG9qaXQ5NzA0ZGV5QGdtYWlsLmNvbSJ9.-hQv6xMU_vy3xB0TJCIJrli4OxUJ4BDfkLxm9Tr4VZA",
  "Content-Type": "application/json",
}
export default function () {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { test_id,question_id } = useParams()

  // useEffect(()=>{
  //   dispatch(
  //     getQuestionById(question_id,(res)=>{
  //       console.log(res)
  //     })
  //   )
  // },[])

  const questions = useSelector((state) => state.tests.test.questions)
  const [submission_id, setSubmissionId] = useState(null)
  const [ answers, setAnswers ] = useState(null)
  const [ checkedOptions, setCheckedOptions ] = useState([])
  const [ submission_check, setSubmissionCheck ] = useState([])
  const ques = questions.filter((q)=> {
    return q.id == question_id
  })

  let question_paper = ques[0]


  var type = "Multiple Correct";
  var positive = question_paper.positive_marks;
  var negative = question_paper.negative_marks;
  var arrayOne = question_paper.options;
  var arrayTwo = question_paper.options;
  var arrayThree = ["True", "False"];
  var numberofUnanswered = 0;
  var numberofAnswered = 0;
  var numberofUnattempted = 0;
  var numberofMarkedforreview = 0;
  var question = question_paper.name

  useEffect(()=>{
    setAnswers(null)
    axios.get(`/api/submission/${test_id}/`,{
      headers : headers
    })
    .then((res)=>{
      console.log(res.data)
      setSubmissionCheck(res.data)
    })


    axios.get(`/api/submission/${test_id}/${question_id}`,{
      headers : headers
    })
    .then((res)=>{
      if(res.status === 200){
        console.log(res.data)
        if(res.data.length > 0){
          setAnswers(res.data[0])
          let options = res.data[0].answer_submitted
          let list = []
          for(let op of options){
            list.push(op.id)
          }
          setCheckedOptions(list)
          setSubmissionId(res.data.id)
        }
        
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  },[question_id])

  function saveAttempts(){
    let data = {
      question : question_id,
      answer_submitted : checkedOptions,
      is_attempted : true,
    }

    console.log(data)
    console.log(answers)
    if(answers)
    {
      axios.patch(`/api/submission/${test_id}/${question_id}/`,data,{
        headers : headers
      })
      .then((res)=>{
        console.log(res)
        if(res.status === 200){
          setAnswers(null)
        }
      })
    }
    else{
      axios.post(`/api/submission/${test_id}/${parseInt(question_id)}/`,data,{
        headers : headers
      })
      .then((res)=>{
        if(res.status === 201){
          setAnswers(null)
        }
      })
    }
    
  }


  function saveReview(){
    const data = {
      is_attempted : true,
      is_reviewed : true,
    }
    if(answers)
    {
      axios.patch(`/api/submission/${test_id}/${question_id}/`,data,{
        headers : headers
      })
      .then((res)=>{
        console.log(res)
        if(res.status === 200){
          setAnswers(null)
        }
      })
    }
    else{
      axios.post(`/api/submission/${test_id}/${parseInt(question_id)}/`,data,{
        headers : headers
      })
      .then((res)=>{
        if(res.status === 201){
          setAnswers(null)
        }
      })
    }
  }


  const style = {
    is_attempted : {
      borderRadius: "50%",
      backgroundColor: "#68b45a",
      border: "none",
    },
    is_reviewed : {
      borderRadius: "50%",
      backgroundColor: "#7b449e",
      border: "none",
    },
    not_visited : {
      borderRadius: "50%",
      backgroundColor: "white",
      borderColor: "black",
      color: "black",
    },
    not_answered : {
      borderRadius: "50%",
      backgroundColor: "#c6462f",
      border: "none",
    }
  }


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
              display: type === "Single Correct" ? "block" : "none",
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
                  <label for={item.name}>&nbsp;{item.name}</label>
                </div>
              );
            })}
          </Form>
          <Form
            style={{
              margin: "2%",
              display: type === "Multiple Correct" ? "block" : "none",
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
                    checked={checkedOptions.filter((ans)=> ans == item.id).length > 0}
                    onChange = {(e)=>{
                      console.log(e.target.checked)
                      let checkedOpts = checkedOptions
                      checkedOpts = checkedOpts.filter((ch)=>{
                        return ch != item.id
                      })
                      if(e.target.checked){
                        checkedOpts.push(item.id)
                      }else{
                        checkedOpts = checkedOpts.filter((ch)=>{
                          return ch != item.id
                        })
                      }

                      setCheckedOptions(checkedOpts)
                    }}
                  />
                  <label for={item.name}>&nbsp;{item.name}</label>
                </div>
              );
            })}
          </Form>
          <Form
            style={{
              margin: "2%",
              display: type === "Fill in The Blank" ? "block" : "none",
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
          <Form
            style={{
              margin: "2%",
              display: type === "True/False" ? "block" : "none",
            }}
          >
            {arrayThree.map((item, index) => {
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
                  onClick = {saveAttempts}
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

                  onClick = {()=>{
                    saveReview()
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
                  {submission_check.filter((subs)=>subs.answer_submitted.length === 0 && subs.subjective_answer === null).length}
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
                  {submission_check.filter((subs)=>subs.is_attempted).length}
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
                  {submission_check.filter((subs)=>subs.is_reviewed).length}
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
              {questions.map((question,i)=>{
                let check = submission_check.filter((s) => s.question === question.id)
                let btn_style = null
                if( check.length === 0 ){
                  btn_style = style.not_visited
                }else{
                  if(check[0].answer_submitted.length === 0 && check[0].subjective_answer === null) btn_style = style.not_answered
                  else if(check[0].is_reviewed){
                    btn_style = style.is_reviewed
                  }
                  else if(check[0].is_attempted) btn_style = style.is_attempted
                }
                return (
                <Col xs={2}>
                <Button
                  style={btn_style}
                  onClick = {()=>{
                    setCheckedOptions([])
                    navigate(`/answer/${test_id}/${question.id}`)
                  }}
                >
                  {i + 1 >= 1 && i + 1 <= 9 ? `0${i + 1}` : i + 1}
                </Button>{" "}
              </Col>
              )})}
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
              onClick = {saveAttempts}
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

              onClick = {()=>{
                saveReview()
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
