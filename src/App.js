import React from "react"
import Navbar from "./Components/Home/Navbar/Navbar"
import Home from "./Components/Home/Home/Home"
import Contact from "./Components/Contact Us/Contactus"
import NurseLogin from "./Components/Registration/NurseRegister/pages/Login"
import UserLogin from "./Components/Registration/UserRegister/pages/Login"
import Servises from "./Components/Servises/Servises"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from './Components/Home/Footer/Footer';
import FetchNurses from "./Components/Nurse2/FetchNurses"
import NurseProfile from "./Components/Nurse2/NurseProfile"
import NurseSignup from './Components/Registration/NurseRegister/pages/Signup'
import UserSignup from './Components/Registration/UserRegister/pages/Signup'
import ErorrPage from "./ErorrPage"
import UserProfile from './UserProfile/UserProfile'
function App() {
  return (

    <Router>


      <Switch>
        <Route path='/' Components={Home} exact>
          <Navbar />
          <Home />
        </Route>



        <Route path='/servises' Components={Servises}  >
          <Navbar />
          <Servises />
          <Footer />
        </Route>
        <Route path='/nurses' Components={FetchNurses} exact >
          <Navbar />
          <FetchNurses />
          <Footer />
        </Route>

        <Route path='/contact-us' Components={Contact}  >
          <Navbar />
          <Contact />
          <Footer />
        </Route>

        <div className="min-h-full h-screen flex items-center mt-11 justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">

            <Route path='/nurse_login' Components={NurseLogin}  >  <NurseLogin />
            </Route>
            <Route path='/nursesignup' Components={NurseSignup} exact>  <NurseSignup /> </Route>

            <Route path='/user_login' Components={UserLogin}  >   <UserLogin />
            </Route>
            <Route path='/usersignup' Components={UserSignup} exact>  <UserSignup /> </Route>


          </div></div>





        <Route path='/:username' Components={NurseProfile}  >
          <Navbar />
          <NurseProfile />
          <Footer />
        </Route>



        <Route path='/:username' Components={UserProfile}  >
          <Navbar />
          <UserProfile />
          <Footer />
        </Route>






        <Route path='*' Components={ErorrPage}  >
          <ErorrPage />
        </Route>


      </Switch>

    </Router>

  )
}

export default App
