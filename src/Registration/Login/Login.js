import React, { useState, useEffect } from 'react'
import { Form, Card } from "react-bootstrap";
import AdminLogin from "./AdminLogin";
import CustomerLogin from "./CustomerLogin";
import NurseLogin from "./NurseLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import './login.css';
function Login() {

  const [adminVisibile, setadminVisibile] = useState(false);
  const [nurseVisibile, setnurseVisibile] = useState(false);
  const [customerVisibile, setcustomerVisibile] = useState(false);

  const [Rule, setRule] = useState("Select");


  const changeRule = (e) => {
    setRule(e.target.value)
  }



  useEffect(() => {
    Rule === 'Admin' ? setadminVisibile(true) : setadminVisibile(false);
    Rule === 'Nurse' ? setnurseVisibile(true) : setnurseVisibile(false);
    Rule === 'Customer' ? setcustomerVisibile(true) : setcustomerVisibile(false);

  }, [Rule]);

  return (
    <>

      <div className='cards'>
        <Card style={{ width: '22rem' }}>

          <div className='choose'>
            <span  > Login as: </span> <Form.Select className='w-50' value={Rule} onChange={changeRule} aria-label="Default select example">
              <option>Select...</option>
              <option value="Admin">Admin</option>
              <option value="Nurse">Nurse</option>
              <option value="Customer">Customer</option>
            </Form.Select>

          </div>

          {adminVisibile && <AdminLogin />}
          {nurseVisibile && <NurseLogin />}
          {customerVisibile && <CustomerLogin />}
        </Card>
      </div>
    </>
  );
}

export default Login;
