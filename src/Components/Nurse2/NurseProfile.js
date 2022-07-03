import React, { useState, useEffect } from 'react'
import './NurseProfile.css'
import DatePicker from './DateRangePicker'
import { useParams } from 'react-router-dom'
import NursesData from '../../NursesData'
import Helmet from 'react-helmet'
function NurseProfile() {
    const [singleNurse, setSingleNurse] = useState([])
    const { username } = useParams()


    useEffect(() => {
        const findNurse = () => {
            const newNurse = NursesData.find((Nurse) => (Nurse.username === username))
            // const nurse_id = NursesData.id
            setSingleNurse(newNurse)

        }

        findNurse()
    }, [username])

    return (
        <div>
            <Helmet>
                <title> Profile {username}</title>
            </Helmet>


            <h1 className='profile-title' >Nurse Profile</h1>
            <div className='main-profile'>

                <div className='main-photo'>
                    <img src={singleNurse.image} className='profile-images' />
                </div>

                <div className='profile-description'>
                    {singleNurse.id}
                    <h4 className='profile-name'>Name :{singleNurse.firstName} {singleNurse.lastName}</h4>
                    <h4 className='profile-email'>Email :{singleNurse.email} </h4>
                    <h4 className='profile-phone'>phone :{singleNurse.phoneNumber} </h4>

                    <h4 className='profile-skill'>Skill: {singleNurse.skills} </h4>
                    <h4 className='profile-education'> education:{singleNurse.education}</h4>

                    <h4 className='profile-brithdate'> birthDate:{singleNurse.birthDate}</h4>
                    <h4 className='profile-country'> country:{singleNurse.country}</h4>

                    <h4 className='profile-address'> address:{singleNurse.address}</h4>

                    <h4 className='profile-datereserve'>Range Of Reserve: <DatePicker className='date-range-picker' /></h4>
                    <button className='profile-btn'> Reserve this Nurse Now</button>



                </div>
            </div>

            <div className='profile-comments'></div>



        </div >
    )
}

export default NurseProfile