import './navbar.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Dropdown() {

    const [isActive, setisActive] = useState(false)
    return (
        <div className="dropdown">

            <div className="dropdown-btn" onClick={(e) =>
                setisActive(!isActive)
            } >
                Login
                <span className='fas fa-creat-down'></span>
            </div>
            {isActive && (<div className="dropdown-content">
                <div className="dropdown-item">
                    <Link to="/user_login">

                        Login as User
                    </Link>


                </div>
                <div className="dropdown-item">

                    <Link to='/nurse_login'>

                        Login as Nurse
                    </Link>

                </div>
                <div className="dropdown-item">

                    <Link to='/adminlogin'>    Login as Admin</Link>

                </div>  </div>)}





        </div>

    )
}

export default Dropdown;