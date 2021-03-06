import React from "react"
import Navbar from "./Components/Home/Navbar/Navbar"
import Home from "./Components/Home/Home/Home"
import Contact from "./Components/Contact Us/Contactus"
import NurseProfile from "./Components/Nurse2/NurseProfile"
import Servises from "./Components/Servises/Servises"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from './Components/Home/Footer/Footer';
import FetchNurses from "./Components/Nurse2/FetchNurses"
import Setting from './Setting'
import NurseSignup from './Components/Registration/NurseRegister/pages/Signup'
import UserSignup from './Components/Registration/UserRegister/pages/Signup'
import NurseLogin from "./Components/Registration/NurseRegister/pages/Login"
import UserLogin from "./Components/Registration/UserRegister/pages/Login"
import AdminLogin from './Components/Registration/AdminRegister/pages/Login'
import AdminPage from './Components/Admin/Admin'
import Helppage from './HelpPage'
import UserProfile from './Components/Registration/UserRegister/UserProfile'

function App() {
  return (

    <Router>


      <Switch>
        <Route path='/' Components={Home} exact>
          <Navbar />
          <Home />
        </Route>

        <Route path='/nurses/:username' Components={NurseProfile} exact >
          <Navbar />
          <NurseProfile />
          <Footer />
        </Route>




        <Route path='/servises' Components={Servises} exact>
          <Navbar />
          <Servises />
          <Footer />
        </Route>
        <Route path='/nurses' Components={FetchNurses} exact >
          <Navbar />
          <FetchNurses />
          <Footer />
        </Route>

        <Route path='/contact-us' Components={Contact} exact >
          <Navbar />
          <Contact />
          <Footer />
        </Route>


        <Route path='/admin' Components={AdminPage} exact >
          <Navbar />

          <AdminPage />
          <Footer />
        </Route>
        <Route path='/profile-user' Components={UserProfile} exact >
          <Navbar />
          <UserProfile />
          <Footer />
        </Route>


        <div className="min-h-full h-screen flex items-center mt-11 justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <Route path='/nurse_login' Components={NurseLogin}  >  <NurseLogin />
            </Route>
            <Route path='/user_login' Components={UserLogin}  >   <UserLogin />
            </Route>
            <Route path='/usersignup' Components={UserSignup}  >  <UserSignup /> </Route>


            <Route path='/nursesignup' Components={NurseSignup}  >  <NurseSignup /> </Route>

            <Route path='/adminlogin' Components={AdminLogin}  >  <AdminLogin /> </Route>


          </div></div>





        <Route path='/helppage' Components={Helppage} exact >
          <Navbar />
          <Helppage />
          <Footer />
        </Route>



        <Route path='/settings' Components={Setting} exact><Setting /> </Route>







      </Switch>

    </Router>

  )
}

export default App
