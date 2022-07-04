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
                            <h6 className='h6'> name:{item.firstName} {item.lastName}</h6>
                            <h6 className='h6'> rate: {item.rate}</h6>
                            <h6 className='h6'> Skill: {item.skills}</h6>

                        </div>
                    </div>
                })
            }
        </div >
    )
}

export default Menu;
