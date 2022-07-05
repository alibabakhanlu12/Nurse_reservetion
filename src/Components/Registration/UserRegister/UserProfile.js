import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import UsersData from '../../../UsersData'

function UserProfile(props) {

    console.log(props.location.state)


    const [singleNurse, setSingleNurse] = useState([])

    const { username } = useParams()


    useEffect(() => {
        const findNurse = () => {
            const newUser = UsersData.find((User) => (User.username === username))
            // const nurse_id = NursesData.id
            setSingleNurse(newUser)


        }


        findNurse()
    }, [username])

    console.log(props.signupState)

    const handleclickbtn = () => {
        console.log(singleNurse)


    }
    <Helmet >

        <title> UserProfile</title>

    </Helmet>


    return (
        <div>

        </div>
    )
}

export default UserProfile