import React, { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { FaHospitalAlt } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Dropdown from './Drobdown'
const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>

      <nav className='navbar'>
        <Link to='/'>  <h3 className='logo'>Hospital <FaHospitalAlt />  </h3>  </Link>


        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/' className='home'>

          </Link>
          <Link to='/nurses' className='nurses'>
            <li>Nurses</li>
          </Link>
          <Link to='/servises' className='servises'>
            <li>Services</li>
          </Link>
          <Link to='/contact-us' className='contactus'>
            <li>ContactUs</li>
          </Link>


          <Dropdown />
          <Link to='/user_login' className='logout'>

            <li className='logout' ><IoLogOutSharp className="icons11" /> </li>
          </Link>



          <Link to='/profile-user' className='profile'>

            <li className='profile' ><CgProfile className="icons11" /> </li>
          </Link>
        </ul>

        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>


    </>
  )
}
export default Navbar
