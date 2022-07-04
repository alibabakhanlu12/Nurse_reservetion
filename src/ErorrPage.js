import React from 'react'
import { Link } from 'react-router-dom'
function ErorrPage() {
    return (
        <div>

            <h1 align='center'> Error 403</h1>
            <h4>your Entered URL is not correct </h4>
            <button>your Entered URL is not correct<Link to='/'>Back to Home </Link> </button>
        </div>
    )
}

export default ErorrPage