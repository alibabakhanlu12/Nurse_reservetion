import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './Signup.css'
import { Button, Form, Row, Col } from "react-bootstrap";

function CustomerSignup() {
    return (
        <>
            <h2 align='center'> Customer Page Sign Up</h2>
            <Form>
                <Row className='mt-3'>

                    <Form.Group as={Col} className="mb-1" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />

                    </Form.Group>
                    <Form.Group as={Col} className="mb-1" controlId="formBasicLastname">
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control type="text" placeholder="Enter Lastname" />

                    </Form.Group>
                </Row>

                <Form.Group as={Col} className="mb-3  " controlId="formBasicUserName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" />


                </Form.Group>
                <Form.Group className="mb-3  " controlId="formBasicAddres">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Addres" />

                </Form.Group>

                <Form.Group className="mb-3  " controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="Email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3  " controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="Email" placeholder="Enter phone" />
                </Form.Group>



                <div className="choose1 mt-3">


                    <Form.Select as={Col} aria-label="Default select example">
                        <option>Select Country...</option>
                        <option value="USA">USA</option>
                        <option value="Iran">Iran</option>
                        <option value="UK">UK</option>
                        <option value="Turkey">Turkey</option>
                    </Form.Select>

                    <Form.Select as={Col} aria-label="Default select example">
                        <option>Select City...</option>
                        <option value="USA">USA</option>
                        <option value="Iran">Iran</option>
                        <option value="UK">UK</option>
                        <option value="Turkey">Turkey</option>
                    </Form.Select>

                </div>


                <Row className='mt-3'>

                    <Form.Group as={Col} className="mb-6 ml-3" controlId="formBasicDate">
                        <Form.Label>birthdate</Form.Label>
                        <Form.Control type="date" />


                    </Form.Group>
                    <Form.Group as={Col} className="mb-6 ml-3" controlId="formBasicAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Enter Age" />


                    </Form.Group>

                </Row>
                <Row className='mt-3'>
                    <Form.Group as={Col} className="mb-6" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>


                    <Form.Group as={Col} className="mb-6" controlId="formBasicConfirmPassword">
                        <Form.Label>ConfirmPassword</Form.Label>
                        <Form.Control type="password" placeholder="ConfirmPassword" />
                    </Form.Group>

                </Row>
                <Button variant="primary" className='submit_btn' type="submit">
                    Submit
                </Button>
            </Form>

        </>
    )
}

export default CustomerSignup