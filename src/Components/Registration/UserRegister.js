import React from 'react'
import './UserRegister.css'
import { Link } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material/styles';
import { IoMdArrowRoundBack } from 'react-icons/io'

import DatePicker from './DatePicker'
function UserRegister() {
    return (
        <div className='main_div'>

            <div class="login-wrap">
                <div class="login-html">
                    <Link to='/'> <button className='back_btn'><IoMdArrowRoundBack />Back to Home</button></Link>

                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
                    <label for="tab-1" className="tab">
                        SignIn
                    </label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" />
                    <label for="tab-2" className="tab">
                        Sign Up
                    </label>
                    <div className="login-form">
                        <div className="sign-in-htm">
                            <div className="group">
                                <input id="user" type="text" className="input" placeholder="Username" />
                            </div>
                            <div class="group">
                                <input id="pass" type="password" className="input" data-type="password" placeholder="Password" />
                            </div>
                            <div class="group">
                                <input id="check" type="checkbox" className="check" checked />
                                <label for="check">
                                    <span className="icon"></span>
                                    Keep me Signed in
                                </label>
                            </div>
                            <div class="group">

                                <Link to='/'>
                                    <input type="submit" className="button" value="Sign In" />

                                </Link>
                            </div>
                            <div class="hr"></div>
                            <div class="foot-lnk">
                                <a href="#forgot">Forgot Password?</a>
                            </div>
                        </div>
                        <div class="sign-up-htm">
                            <div class="first-row">
                                <div class="group">
                                    <input id="name" type="text" className="input" placeholder="Name" />
                                </div>
                                <div class="group">
                                    <input id="lname" type="text" className="input" placeholder="Last Name" />
                                </div>
                                <div class="group">
                                    <input id="email" type="text" className="input" placeholder="Email" />
                                </div>
                            </div>
                            <div class="second-row">
                                <div class="group">
                                    <StyledEngineProvider id="birth" injectFirst>
                                        <DatePicker className="input-date" />
                                    </StyledEngineProvider>
                                </div>
                                <div class="group">
                                    <input id="phone" type="text" className="input" placeholder="Phone Number" />
                                </div>
                                <div class="group">
                                    <select name="country" className="country">
                                        <option value="select" className='inputs' >Select your country...</option>
                                        <option value="Iran" className='inputs' >Iran</option>
                                        <option value="Netherland" className='inputs' >Netherland</option>
                                        <option value="United Kingdom" className='inputs' >United Kingdom</option>
                                    </select>
                                </div>
                            </div>
                            <div className="third-row">
                                <div className="group">
                                    <input id="user" type="text" className="input" placeholder="Username" />
                                </div>
                                <div class="group">
                                    <input id="pass" type="password" className="input" data-type="password" placeholder="Password" />
                                </div>
                                <div class="group">
                                    <input id="pass" type="password" className="input" data-type="password"
                                        placeholder="Repeat Password" />
                                </div>
                            </div>

                            <div class="group">
                                <Link to='/'>  <input type="submit" className="button" value="Sign Up" /></Link>

                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <label for="tab-1">Already Member?</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div> </div>
    )
}

export default UserRegister;