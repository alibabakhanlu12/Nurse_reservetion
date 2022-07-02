import React, { useState, useEffect } from 'react'
import './NurseProfile.css'
import DatePicker from './DateRangePicker'
import { useParams } from 'react-router-dom'
import FakeData from '../Nurses/FakeData'
function NurseProfile() {
    const [singleNurse, setSingleNurse] = useState([])
    const { last_name } = useParams()


    useEffect(() => {
        const findNurse = () => {
            const newNurse = FakeData.find((Nurse) => (Nurse.last_name === last_name))
            setSingleNurse(newNurse)
        }

        findNurse()
    }, [last_name])

    return (
        <div>
            <h1 className='profile-title' >Nurse Profile</h1>
            <div className='main-profile'>

                <div className='main-photo'>
                    <img src={singleNurse.image} className='profile-images' />
                </div>

                <div className='profile-description'>

                    <h3 className='profile-name'>Name :{last_name}</h3>
                    <h3 className='profile-email'>Email :{singleNurse.email} </h3>
                    <h3 className='profile-phone'>phone :{singleNurse.phone} </h3>
                    <h3 className='profile-skill'>Skill:{singleNurse.skill} </h3>
                    <h3 className='profile-education'>Education:{singleNurse.education} </h3>
                    <h3 className='profile-address'>Address:{singleNurse.address} </h3>
                    <h3 className='profile-datereserve'>Range Of Reserve: <DatePicker className='date-range-picker' /></h3>
                    <button className='profile-btn'> Reserve this Nurse Now</button>

                </div>
            </div>

            <div className='profile-comments'></div>



        </div>
    )
}

export default NurseProfile