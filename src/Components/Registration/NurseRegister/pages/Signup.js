import Header from "../components/Header";
import Signup from "../components/Signup";
import '../../index.css'


import { Helmet } from "react-helmet"
export default function SignupPage() {
    return (
        <>
            <Helmet>
                <title> NurseSignup
                </title>
            </Helmet>
            <Header
                heading="Signup to create a Nurse account"
                paragraph="Already have an account? "
                linkName="Login"
                linkUrl='/nurse_login'
            />
            <Signup />
        </>
    )
}