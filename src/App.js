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
} from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes,  Link } from "react-router-dom";
import Home from "./Components/Home";
import Test from "./Components/Test";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Teacher from "./Components/Teacher";
import Student from "./Components/Student";
function App() {
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
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/test" element={<Test/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/teacher" element={<Teacher/>} />
        <Route path="/student" element={<Student/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
