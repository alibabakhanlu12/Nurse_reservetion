import React from 'react'
import { FaTwitterSquare } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { BsInstagram, BsLinkedin, BsFillTelephoneFill } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { FaFax, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa'
import { Link } from "react-router-dom"
import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>

            <div className='socialmedias'>
                <h3 className='footer_title'>Get connected with us on social networks:</h3>
                <div className='icons'>
                    <a href='/www.facebook.com' target><FaFacebook /> </a>
                    <a href='/www.Instagram.com'>  <BsInstagram /></a>
                    <a href='/www.Twiiter.com'>   <FaTwitterSquare /></a>
                    <a href='/www.Github.com'><AiFillGithub /> </a>
                    <a href='www.linkedin.com'><BsLinkedin /> </a>


                </div>

            </div>

            <div className='links'>

                <div className='Servises'>

                    <ul>
                        <h3>Servises</h3>
                        <li><Link to='/servises'> Old care</Link> </li>
                        <li> <Link to="/servises"> Child care</Link> </li>
                        <li><Link to='/servises'>Online Reservation</Link> </li>
                        <li> <Link to='/servises'> Injections section</Link>  </li>
                    </ul>
                </div>
                <div className='usefull_links'>
                    <ul>
                        <h3> Usefull Links</h3>
                        <li><Link to='/setting'> Setting</Link> </li>
                        <li>  <Link to='/help'>  Help</Link> </li>
                        <li><Link to='/orders'>Orders </Link></li>
                        <li> <Link to='other_links'>Other Links</Link> </li>
                    </ul>

                </div>


                <div className='contact'>
                    <ul >
                        <h4>Contact with Us</h4>
                        <li><BsFillTelephoneFill />  Phone Number:+98914121243</li>
                        <li><FaMapMarkerAlt /> Addres:Univercity </li>
                        <li><MdEmail />  Email:Hospital@info.com</li>
                        <li><FaFax /> Fax:+13434345</li>
                    </ul>

                </div>

            </div>
            <div className='coppyright'></div>
            <div className='coppyright_title'> <h6 className='t1'>  © 2022 Copyright:www.Hospital.com</h6>    <h6 className='t2'> made with <AiFillHeart /> in Iran</h6> </div>

        </footer>
    )
}

export default Footer