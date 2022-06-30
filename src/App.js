import React from "react"
import Navbar from "./Components/Home/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Nurses from "./Components/Nurses/Nurses"
import Contact from "./Components/Contact Us/Contactus"
import NurseRegister from "./Components/Registration/NurseResister"
import UserRegister from "./Components/Registration/UserRegister"
import Servises from "./Components/Servises/Servises"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"



function App() {
  return (
    <>
      <Router>


        <Switch>
          <Route path='/' compoent={Home} exact>
            <Navbar />
            <Home />
          </Route>
        </Switch >


        <Switch >
          <Route path='/nurses' compoent={Nurses} exact>
            <Navbar />
            <Nurses />
          </Route>
        </Switch>

        <Switch>
          <Route path='/servises' compoent={Servises} exact>
            <Navbar />
            <Servises />
          </Route>
        </Switch >

        <Switch>
          <Route path='/contact-us' compoent={Contact} exact>
            <Navbar />
            <Contact />
          </Route>
        </Switch >


        <Switch >
          <Route path='/nurse_login' compoent={NurseRegister} exact>
            <NurseRegister />
          </Route>
        </Switch >

        <Switch >
          <Route path='/user_login' compoent={UserRegister} exact>
            <UserRegister />
          </Route>
        </Switch>

      </Router>
    </>
  )
}

export default App
