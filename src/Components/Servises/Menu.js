import React from 'react'
import './Servises.css'
function Menu({ menuItem }) {
    return (
        <div className="item">
            {
                menuItem.map((item, index) => {
                    return <div className="item-con" key={index}>
                        <div className="item-container">

                            <img src={item.image} alt="" />
                            <h4 className='h2'> name: {item.name}</h4>
                            <h6 >category:{item.skills}</h6>
                        </div>
                    </div>
                })
            }
        </div >
    )
}

export default Menu;
