import React, { useState } from 'react'
import FakeData from './FakeData'
import './Nurses.css'
import { Link } from 'react-router-dom'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

function Card() {


    const [item, setItem] = useState("");
    const [value, setValue] = useState();
    return (

        <div>
            <div className='nurse_class_title'>
                <h1 >Nurses List</h1>
                <p>here you can see all of nurses and search with name and rate also you can go profile who you want</p>
            </div>
            <div className='search-filter'>

                <div className='input-filter'>
                    <label>Search by Name</label> <input type='text' className='search_input' placeholder='Enter Name to Search' onChange={(e) => (
                        setItem(e.target.value)
                    )


                    } />
                </div>
                <div className='slider-filter'>
                    <label> search by rate: </label>
                    <RangeSlider

                        value={value}
                        step={1}
                        min={0}
                        max={5}
                        onChange={e => setValue(e.target.value)}

                    />
                </div>

            </div>
            <div className='card_main_div'>
                {FakeData.filter((val1) => {
                    if (val1 == 2)
                        return val1;
                    else if (val1.rate == value) {
                        return val1;
                    }
                }).map((item1) => (
                    <div key={item1.id} className='card11'>
                        <img src={item1.img} className='card-nurse-img' />
                        <h4 className='name'>name:{item1.last_name}</h4>
                        <h4> skill:{item1.skill}</h4>
                        <h4>rate: {item1.rate}</h4>
                        <Link to={`/nurses/profile/${item.last_name}`}><button className='card_button11'>Reserve Now</button></Link>
                    </div>

                ))}
                {FakeData.filter((val) => {
                    if (val === "")
                        return val;
                    else if (val.last_name.toLowerCase().includes(item.toLowerCase())) {
                        return val;
                    }
                }).map((item) => (
                    <div key={item.id} className='card11'>
                        <img src={item.img} className='card-nurse-img' alt={item.first_name} />
                        <h4 className='name'>name:{item.last_name}</h4>
                        <h4> skill:{item.skill}</h4>
                        <h4>rate: {item.rate}</h4>
                        <Link to={`/${item.last_name}`}><button className='card_button11'>Reserve Now</button></Link>
                    </div>

                ))}



            </div>
        </div >
    )
}

export default Card