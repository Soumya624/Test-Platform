import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { addQuestion, getTestById } from "./actions";
import { Link, useParams } from "react-router-dom";
const Input_Option = ({
	setOptionIsCorrect,
	setOptionName,
	option_name,
	inputList,
	setOptionId,
}) => {
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
					value={option_name}
					placeholder="Enter the Option"
					style={{ width: "100%" }}
					onClick={(e) => {
						setOptionId(inputList.length);
						setOptionName(e.target.value);
					}}
					onChange={(e) => {
						setOptionName(e.target.value);
					}}
				/>
			</Col>
			<Col xs={6}>
				<Form.Check
					type="checkbox"
					label="Is Correct"
					style={{ margin: "1%" }}
					onChange={(e) => {
						setOptionIsCorrect(e.target.checked);
					}}
				/>
			</Col>
		</Row>
	);
};

var question_data = {
	positive_marks: 0,
	negative_marks: 0,
	is_range_present: false,
	lowest_mark: 0,
	highest_mark: 0,
};

var option_data = {
	name: null,
	is_correct: false,
};

export default function () {
	const dispatch = useDispatch();
	const { id } = useParams();

	const test = useSelector((state) => state.tests.test)

	const [question, setQuestion] = useState(question_data);
	const [question_name, setQuestionName] = useState("")
	const [option_name, setOptionName] = useState(null);
	const [option_ischecked, setOptionIsCorrect] = useState(false);
	const [option_list, setOptionList] = useState([]);
	const [option_id, setOptionId] = useState(null);
	const [ isLoading, setLoading ] = useState(false)

	useEffect(() => {
		setLoading(true)
		dispatch(
			getTestById(id, (res) => {
				if (res.status === 200){
					setLoading(false)
				}
			}),
		);
	}, []);

	function createQuestion() {
		const data = {
			test: id,
			...question,
			name : question_name,
			options: option_list,
		};

		dispatch(
			addQuestion(data, (res) => {
				console.log(res)
				if(res.status === 200){
					setInputList([])
					setOptionList([])
					setQuestionName("")
					setOptionName(null)
					setQuestion(question_data)
				}
			}),
		);
	}

	const [flag1, setFlag1] = useState(false);
	const [flag2, setFlag2] = useState(false);
	const [flag3, setFlag3] = useState(false);
	const [flag4, setFlag4] = useState(false);
	var typeofquestion = "";
	const [inputList, setInputList] = useState([]);
	const onAddBtnClick = (event) => {
		if (!option_name) {
			setInputList(
				inputList.concat(
					<Input_Option
						setOptionId={setOptionId}
						inputList={inputList}
						option_name={option_name}
						setOptionName={setOptionName}
						setOptionIsCorrect={setOptionIsCorrect}
						key={inputList.length}
					/>,
				),
			);
		}
	};

	const saveOption = (e) => {
		const list = {
			name: option_name,
			is_correct: option_ischecked,
		};
		if (option_list[option_id] !== undefined) {
			option_list[option_id].name = option_name;
			setOptionList(option_list);
			setOptionName(null);
		} else if (option_name) {
			setOptionList(option_list.concat(list));
			setOptionName(null);
		}
	};

	console.log(question.name)

	if(isLoading){
		return <h1 style={{color:"white"}}>Loading...</h1>
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
							<Form.Control
								value = {question.name ? question.name : ""}
								type="test"
								autoComplete="off"
								style={{ height: "5rem" }}
								onChange={(e) => {
									// question.name = e.target.value;
									setQuestion({...question, name : e.target.value});
								}}
							/>
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
							<div>
								<Button>Save</Button>
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
							<div>
								<Button>Save</Button>
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
								<Button onClick={saveOption}>Save</Button>
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
							onClick={createQuestion}
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
							<>
								{test && test.questions.map(function (x, i) {
									return (
										<Col xs={2}>
											<Button
												style={{
													borderRadius: "50%",
													backgroundColor: "white",
													borderColor: "black",
													color: "black",
												}}
												href={`/question/${id}/${x.id}/edit`}
											>
												{i + 1}
											</Button>{" "}
										</Col>
									);
								})}
							</>

							<Col xs={1}></Col>
						</Row>
					</center>
				</Col>
			</Row>
		</div>
	);
}
