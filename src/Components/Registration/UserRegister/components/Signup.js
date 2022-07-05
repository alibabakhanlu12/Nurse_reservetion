import { useState } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import { Link, useHistory } from 'react-router-dom';
import UserProfile from '../UserProfile';
const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

export default function Signup() {


  const navigate = useHistory();
  const openprofile = (id) => {
    navigate('/user-profile', {
      state: {
        id: 'sdfjkd'
      }
    })

  }
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState)
    createAccount();
    <Link to='/'></Link>
    openprofile();
  }


  //handle Signup API Integration here
  const createAccount = () => {


  }

  return (
    <form className="mt-30 " onSubmit={handleSubmit}>
      <div >
        {
          fields.map(field =>
            <Input
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />

          )
        }
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  )
}