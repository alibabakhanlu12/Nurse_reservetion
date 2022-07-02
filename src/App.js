import React from "react"
import Navbar from "./Components/Home/Navbar/Navbar"
import Home from "./Components/Home/Home/Home"
import Contact from "./Components/Contact Us/Contactus"
import NurseRegister from "./Components/Registration/NurseResister"
import UserRegister from "./Components/Registration/UserRegister"
import Servises from "./Components/Servises/Servises"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from './Components/Home/Footer/Footer';
import FakeData from './Components/Nurses/FakeData'
import FetchNurses from "./Components/Nurse2/FetchNurses"
import NurseProfile from "./Components/Nurse2/NurseProfile"
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


        <Route path='/nurse_login' Components={NurseRegister}  >
          <NurseRegister />
        </Route>

        <Route path='/user_login' Components={UserRegister}  >
          <UserRegister />
        </Route>


        <Route path='/:last_name' Components={NurseProfile}  >
          <Navbar />
          <NurseProfile />
          <Footer />
        </Route>



      </Switch>

    </Router>

  )
}

export default App
