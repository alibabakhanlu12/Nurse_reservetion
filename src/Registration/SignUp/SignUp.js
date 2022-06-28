import React, { useState, useEffect } from 'react'
import { Form, Card, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Signup.css'
import NurseSignup from './NurseSignup';
import CustomerSignup from './CustomerSignup';

function SignUp() {

    const [nurseVisible, issetNurseVisible] = useState(false);
    const [CustomerVisible, issetCustomerVisible] = useState(false);

    const [change, setChange] = useState("select position");

    const changeRule = (e) => {
        const selected = e.target.value;
        setChange(selected)
    }

    useEffect(() => {
        change === 'Nurse' ? issetNurseVisible(true) : issetNurseVisible(false);
        change === 'Customer' ? issetCustomerVisible(true) : issetCustomerVisible(false);
    }, [change])





    return (
        <div>

            <Card style={{ width: '440px' }} className='cards md border-10'>

                <Row className='md'>

                    <div className='choose1'>
                        <span className='choose'>
                            SignUp as
                        </span>
                        <Form.Select className='w-75' value={change} onChange={changeRule} >
                            <option>Select...</option>

                            <option value="Nurse">Nurse</option>
                            <option value="Customer">Customer</option>

                        </Form.Select>

                    </div>


                </Row>

                {nurseVisible && <NurseSignup />}
                {CustomerVisible && <CustomerSignup />}

            </Card>  </div>
    )
}

export default SignUp