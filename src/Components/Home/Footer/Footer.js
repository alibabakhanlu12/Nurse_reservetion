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

            <div className='socialmedias11'>
                <h3 className='footer_title11'>Get connected with us on social networks:</h3>
                <div className='icons11'>
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
                        <h3 className='tilte-fotter'>Servises</h3>
                        <li><Link to='/servises'> Old care</Link> </li>
                        <li> <Link to="/servises"> Child care</Link> </li>
                        <li><Link to='/servises'>Online Reservation</Link> </li>
                        <li> <Link to='/servises'> Injections section</Link>  </li>
                    </ul>
                </div>
                <div className='usefull_links'>
                    <ul>
                        <h3 className='tilte-fotter'> Usefull Links</h3>
                        <li><Link to='/setting'> Setting</Link> </li>
                        <li>  <Link to='/help'>  Help</Link> </li>
                        <li><Link to='/orders'>Orders </Link></li>
                        <li> <Link to='other_links'>Other Links</Link> </li>
                    </ul>

                </div>


                <div  >
                    <ul >
                        <h4 className='tilte-fotter'>Contact with Us</h4>
                        <li className='contact11' ><BsFillTelephoneFill />  Phone Number:+98914121243</li>
                        <li className='contact11'  ><FaMapMarkerAlt /> Addres:University of Tabriz </li>
                        <li className='contact11' ><MdEmail />  Email:info@hospital.com</li>
                        <li className='contact11'   ><FaFax /> Fax:041 1431 8851</li>
                    </ul>

                </div>

            </div>
            <div className='coppyright'></div>
            <div className='coppyright_title'> <h6 className='t1'>  © 2022 Copyright:www.Hospital.com</h6>    <h6 className='t2'> made with <AiFillHeart /> in Iran</h6> </div>

        </footer>
    )
}

export default Footer