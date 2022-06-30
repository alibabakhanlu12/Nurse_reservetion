import React from 'react'
import './Contactus.css'
import { FaGithub, FaTwitter, FaTelegram } from 'react-icons/fa'

function Contactus() {

    const submit = (e) => {
        e.preventDefault();
        e.target.elements.name.value = '';
        e.target.elements.email.value = '';
        e.target.elements.message.value = '';
    }
    return (
        <div>
            <section id="contact">

                <h1 class="section-header">We'd love to here from you</h1>

                <div class="contact-wrapper">



                    <form id="contact-form" onSubmit={submit} class="form-horizontal" role="form">

                        <div class="form-group">
                            <div class="col-sm-12">
                                <input type="text" class="form-control" id="name" placeholder="Name" name="name" value=""
                                    required />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-12">
                                <input type="email" class="form-control" id="email" placeholder="Email" name="email" value=""
                                    required />
                            </div>
                        </div>

                        <textarea class="form-control" rows="10" placeholder="Your Message" name="message" required></textarea>

                        <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                            <div class="alt-send-button">
                                <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
                            </div>

                        </button>

                    </form>



                    <div class="direct-contact-container">

                        <ul class="contact-list">
                            <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Iran,
                                Tabriz</span></i></li>

                            <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a
                                href="tel:98-914-395-7795" title="Give me a call">+989143957795</a></span></i></li>

                            <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a
                                href="mailto:#" title="Send me an email">nurse.reservation.team@gmail.com</a></span></i></li>

                        </ul>

                        <hr />
                        <ul class="social-media-list">
                            <a href="https://github.com/alibabakhanlu12/Nurse_reservetion" target="_blank"  >
                                <li>
                                    <FaGithub className='icons' />
                                </li>
                            </a>

                            <a href="https://twitter.com/" target="_blank"  >

                                <li>
                                    <FaTwitter className='icons' />
                                </li>
                            </a>

                            <a href="https://web.telegram.org/" target="_blank" class="contact-icon">
                                <li>
                                    <FaTelegram className='icons' />
                                </li>
                            </a>
                        </ul>
                        <hr />

                        <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

                    </div>

                </div>

            </section></div>
    )
}

export default Contactus