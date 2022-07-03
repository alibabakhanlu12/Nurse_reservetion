import React from 'react'
import './Servises.css'
function Menu({ menuItem }) {
    return (
        <div className="item">
            {
                menuItem.map((item) => {
                    return <div className="item-con" key={item.id}>
                        <div className="item-container">

                            <img src={item.image} className='servises-image' alt="" />
                            <h4 className='h2'> name: {item.lastName}</h4>
                            <h6 >category:{item.skill}</h6>
                        </div>
                    </div>
                })
            }
        </div >
    )
}

export default Menu;
