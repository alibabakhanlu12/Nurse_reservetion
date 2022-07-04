import Header from "../components/Header"
import Login from "../components/Login"
import { Helmet } from 'react-helmet'
export default function LoginPage() {
    return (
        <>
            <Helmet>
                <title> NurseLogin</title>
            </Helmet>
            <Header
                heading="Login to your Nurse account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl='/nursesignup'
            />
            <Login />
        </>
    )
}