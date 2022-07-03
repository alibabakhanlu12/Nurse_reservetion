import React from 'react'
import { Link } from 'react-router-dom'
function ErorrPage() {
    return (
        <div>

            Error 403
            <h4>your Entered URL is not correct </h4>
            <button>your Entered URL is not correct<Link to='/'>Back to Home </Link> </button>
        </div>
    )
}

export default ErorrPage