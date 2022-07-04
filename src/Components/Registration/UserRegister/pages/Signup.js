import Header from "../components/Header";
import Signup from "../components/Signup";
import { Helmet } from 'react-helmet'

export default function SignupPage() {
    return (
        <div className="mt-40">
            <Helmet>
                <title> UserSignup</title>
            </Helmet>
            <Header
                heading="Signup to create an User account"
                paragraph="Already have an account? "
                linkName="Login"
                linkUrl='/user_login'
            />
            <Signup />
        </div>
    )
}

