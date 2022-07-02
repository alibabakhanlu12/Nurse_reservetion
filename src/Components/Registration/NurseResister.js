import React from 'react'
import './NurseRegister.css'

import { Link } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material/styles';
import { IoMdArrowRoundBack } from 'react-icons/io'
import DatePicker from './DatePicker'
function NurseResister() {
    return (
        <div className='body'>
            <div className="login-wrap1">

                <div className="login-html">
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
                            <div className="group">

                                <Link to='/'>

                                    <input type="submit" className="button" value="Sign In" />

                                </Link>
                            </div>
                            <div className="hr"></div>
                            <div className="foot-lnk">
                                <Link to='/login/forgetpassword'>Forgot Password?</Link>
                            </div>
                        </div>
                        <div className="sign-up-htm">
                            <div className="first-row">
                                <div className="group">
                                    <input id="name" type="text" className="input" placeholder="Name" />
                                </div>
                                <div class="group">
                                    <input id="lname" type="text" className="input" placeholder="Last Name" />
                                </div>
                                <div className="group">
                                    <input id="email" type="email" className="input" placeholder="Email" />
                                </div>
                            </div>
                            <div className="second-row">
                                <div className="group">

                                    <StyledEngineProvider id="birth" className="inputdate" injectFirst>
                                        <DatePicker />
                                    </StyledEngineProvider>

                                </div>
                                <div className="group">
                                    <input id="phone" type="number" className="input" placeholder="Phone Number" />
                                </div>
                                <div className="group">
                                    <select name="country" className="country">
                                        <option className='inputs' value="select">Select your country...</option>
                                        <option className='inputs' value="Iran">Iran</option>
                                        <option className='inputs' value="Netherland">Netherland</option>
                                        <option className='inputs' value="United Kingdom">United Kingdom</option>
                                    </select>
                                </div>
                            </div>
                            <div className="third-row">
                                <div className="group">
                                    <input id="user" type="text" className="input" placeholder="Username" />
                                </div>
                                <div className="group">
                                    <input id="pass" type="password" className="input" data-type="password" placeholder="Password" />
                                </div>
                                <div className="group">
                                    <input id="pass" type="password" className="input" data-type="password"
                                        placeholder="Repeat Password" />
                                </div>
                            </div>
                            <div className="fourth-row">
                                <div className="group">
                                    <select name="country" className="country">
                                        <option className='inputs' value="select">Select your degree...</option>
                                        <option className='inputs' value="bachelor">Bachelor</option>
                                        <option className='inputs' value="Master">Master</option>
                                        <option className='inputs' value="PHD">PHD</option>
                                    </select>
                                </div>
                                <div className="group">
                                    <input id="address" type="text" className="input" placeholder="Address" />
                                </div>
                                <div className="group">
                                    <input id="skils" type="text" className="input" placeholder="Skils" />
                                </div>
                            </div>

                            <div className="group">
                                <Link to='/'>
                                    <input type="submit" className="button" value="Sign Up" />


                                </Link>

                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <label for="tab-1">Already Member?</label>
                                </div> </div>

                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default NurseResister