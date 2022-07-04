import Header from "../components/Header"
import Login from "../components/Login"
import { Helmet } from 'react-helmet'
export default function LoginPage() {
    return (
        <>
            <Helmet>
                <title> Admin Login</title>
            </Helmet>
            <Header
                heading="Login As Admin"

            />
            <Login />
        </>
    )
}