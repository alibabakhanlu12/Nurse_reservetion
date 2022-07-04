import React, { useState, useEffect } from 'react'
import './NurseProfile.css'
// import ModalButton from './Modal'
import { useParams } from 'react-router-dom'
import NursesData from '../../NursesData'
import Helmet from 'react-helmet'
import Modal from './ModalButton'
function NurseProfile({ }) {
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


    let startvalue = React.createRef();
    let endvalue = React.createRef();



    // get value from dates in the nurse profile
    const handleclickbtn = () => {
        console.log(singleNurse)

        console.log(startvalue.current.value)
        console.log(endvalue.current.value)

    }

    // useEffect(() => {

    //     console.log(NursesData)
    // }, [])
    return (
        <div>
            <Helmet>
                <title>  {username}'s Profile</title>
            </Helmet>


            <h1 className='profile-title' >Nurse Profile</h1>
            <div className='main-profile'>

                <div className='main-photo'>
                    <img src={singleNurse.image} alt={singleNurse.lastName} className='profile-images' />
                </div>

                <div className='profile-description'>
                    <h4 className='profile-name'>Name : {singleNurse.firstName} {singleNurse.lastName}</h4>
                    <h4 className='profile-email'>Email : {singleNurse.email} </h4>
                    <h4 className='profile-phone'>phone : {singleNurse.phoneNumber} </h4>

                    <h4 className='profile-skill'>Skill: {singleNurse.skills} </h4>
                    <h4 className='profile-education'> Education: {singleNurse.education}</h4>

                    <h4 className='profile-brithdate'> BirthDate: {singleNurse.birthDate}</h4>
                    <h4 className='profile-country'> Country: {singleNurse.country}</h4>

                    <h4 className='profile-address'> Address: {singleNurse.address}</h4>

                    <h4 className='profile-datereserve'>Range Of Reserve:
                        <div className='reservedate'>
                            <pre> Start :</pre>    <input ref={startvalue} type='date' className='start-date' />
                            <pre> End :</pre>    <input ref={endvalue} className='finish-date' type='date' /> </div> </h4>
                    <button className='profile-btn' onClick={handleclickbtn} > <Modal /> </button>



                </div>
            </div>

            <div className='profile-comments'></div>



        </div >
    )
}

export default NurseProfile