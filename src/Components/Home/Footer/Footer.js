import React from 'react'
import { FaTwitterSquare } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { BsInstagram, BsLinkedin, BsFillTelephoneFill } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { FaFax, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa'
import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>

            <div className='socialmedias'>
                <h3 className='footer_title'>Get connected with us on social networks:</h3>
                <div className='icons'> <FaFacebook /><BsInstagram />  <FaTwitterSquare /> <AiFillGithub /> <BsLinkedin />          </div>

            </div>

            <div className='links'>

                <div className='Servises'>

                    <ul>
                        <h3>Servises</h3>
                        <li>Old care</li>
                        <li>Child care</li>
                        <li>Online Reservation</li>
                        <li>Injections section</li>
                    </ul>
                </div>
                <div className='usefull_links'>
                    <ul>
                        <h3> Usefull Links</h3>
                        <li>Setting </li>
                        <li>Help </li>
                        <li>Orders </li>
                        <li>Other </li>
                    </ul>

                </div>


                <div className='contact'>
                    <ul >
                        <h4>Contact with Us</h4>
                        <li><BsFillTelephoneFill /> <span></span> Phone Number:+98914121243</li>
                        <li><FaMapMarkerAlt /><span></span>Addres:Univercity </li>
                        <li><MdEmail /><span></span> Email:Hospital@info.com</li>
                        <li><FaFax /><span></span>Fax:+13434345</li>
                    </ul>

                </div>

            </div>
            <div className='coppyright'></div>
            <div className='coppyright_title'> <h6 className='t1'>  © 2022 Copyright:www.Hospital.com</h6>    <h6 className='t2'> made with <AiFillHeart /> in Iran</h6> </div>

        </footer>
    )
}

export default Footer