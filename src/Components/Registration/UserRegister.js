import React from 'react'
import './UserRegister.css'
import { Link } from 'react-router-dom'
function UserRegister() {
    return (
        <div className='main_div'>

            <div class="login-wrap">
                <div class="login-html">
                    <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
                    <label for="tab-1" class="tab">
                        SignIn
                    </label>
                    <input id="tab-2" type="radio" name="tab" class="sign-up" />
                    <label for="tab-2" class="tab">
                        Sign Up
                    </label>
                    <div class="login-form">
                        <div class="sign-in-htm">
                            <div class="group">
                                <input id="user" type="text" class="input" placeholder="Username" />
                            </div>
                            <div class="group">
                                <input id="pass" type="password" class="input" data-type="password" placeholder="Password" />
                            </div>
                            <div class="group">
                                <input id="check" type="checkbox" class="check" checked />
                                <label for="check">
                                    <span class="icon"></span>
                                    Keep me Signed in
                                </label>
                            </div>
                            <div class="group">

                                <Link to='/'>
                                    <input type="submit" class="button" value="Sign In" />

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
                                    <input id="name" type="text" class="input" placeholder="Name" />
                                </div>
                                <div class="group">
                                    <input id="lname" type="text" class="input" placeholder="Last Name" />
                                </div>
                                <div class="group">
                                    <input id="email" type="text" class="input" placeholder="Email" />
                                </div>
                            </div>
                            <div class="second-row">
                                <div class="group">
                                    <input id="birth" type="text" class="input" placeholder="Birthdate" />
                                </div>
                                <div class="group">
                                    <input id="phone" type="text" class="input" placeholder="Phone Number" />
                                </div>
                                <div class="group">
                                    <select name="country" class="country">
                                        <option value="select">Select your country...</option>
                                        <option value="Iran">Iran</option>
                                        <option value="Netherland">Netherland</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                    </select>
                                </div>
                            </div>
                            <div class="third-row">
                                <div class="group">
                                    <input id="user" type="text" class="input" placeholder="Username" />
                                </div>
                                <div class="group">
                                    <input id="pass" type="password" class="input" data-type="password" placeholder="Password" />
                                </div>
                                <div class="group">
                                    <input id="pass" type="password" class="input" data-type="password"
                                        placeholder="Repeat Password" />
                                </div>
                            </div>

                            <div class="group">
                                <Link to='/'>  <input type="submit" class="button" value="Sign Up" /></Link>

                            </div>
                            <div class="hr"></div>
                            <div class="foot-lnk">
                                <label for="tab-1">Already Member?</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div> </div>
    )
}

export default UserRegister;