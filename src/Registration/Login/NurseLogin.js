import React from "react";
import { Form, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import './login.css'
function NurseLogin() {
    return (
        <div>
            <h2 align='center'>Nurse Page Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" className="center_btn" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default NurseLogin;
