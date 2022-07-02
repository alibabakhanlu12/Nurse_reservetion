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
    <>
      <Router>


        <Switch>
          <Route path='/' compoent={Home} exact>
            <Navbar />
            <Home />
          </Route>


          <Route path='/nurses' compoent={FetchNurses} exact>
            <Navbar />
            <FetchNurses />
            <Footer />
          </Route>

          <Route path='/:last_name' compoent={NurseProfile} exact>
            <Navbar />
            <NurseProfile />
            <Footer />
          </Route>

          <Route path='/servises' compoent={Servises} exact>
            <Navbar />
            <Servises />
            <Footer />
          </Route>

          <Route path='/contact-us' compoent={Contact} exact>
            <Navbar />
            <Contact />
            <Footer />
          </Route>


          <Route path='/nurse_login' compoent={NurseRegister} exact>
            <NurseRegister />
            <Footer />
          </Route>

          <Route path='/user_login' compoent={UserRegister} exact>
            <UserRegister />
          </Route>



          {
            FakeData.map((item) => (
              <Route key={item.id} path={`/nurses/profile/${item.last_name}`} compoent={NurseProfile}  >
                <UserRegister />
              </Route>
            )
            )}





        </Switch>

      </Router>
    </>
  )
}

export default App
