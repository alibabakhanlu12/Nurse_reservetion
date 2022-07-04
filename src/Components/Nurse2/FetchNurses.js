import React, { useState } from 'react'
import NurseData from '../../NursesData';
import { Link } from 'react-router-dom'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import './Nurses.css'
import { Helmet } from 'react-helmet'

function FetchNurses() {

    const [item, setItem] = useState("");
    const [value, setValue] = useState();

    return (


        <div>
            <Helmet>
                <title> Nurses</title>
            </Helmet>
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
                    <label className='slider-filter-label'> search by rate: </label>
                    <RangeSlider
                        className='slider-filter-info'
                        value={value}
                        step={1}
                        min={0}
                        max={5}
                        onChange={e => setValue(e.target.value)}

                    />
                </div>

            </div>
            <div className='card_main_div'>
                {NurseData.filter((val1) => {
                    if (val1 === 2)
                        return val1;
                    else if (val1.rate === value) {
                        return val1;
                    }
                }).map(({ id, image, username, skills, phoneNumber, rate, firstName, lastName, education, birthDate, address, country }) => (
                    <div key={id} className='card11'>
                        <img src={image} className='card-nurse-img' />
                        <div className='nurse-information'>
                            <h4 className='name'>Fullname:{firstName} {lastName}</h4>
                            <h4> skill:{skills}</h4>

                            <h4>rate: {rate}</h4>
                        </div>
                        <Link to={`/nurses/${username}`}><button className='card_button11'>More Info</button></Link>
                    </div>

                ))}


                {NurseData.filter((val) => {
                    if (val === "")
                        return val;
                    else if (val.username.toLowerCase().includes(item.toLowerCase())) {
                        return val;
                    }
                }).map(({ id, image, username, skills, rate, phoneNumber, firstName, lastName, education, birthDate, address, country }) => (
                    <div key={id} className='card11'>
                        <img src={image} className='card-nurse-img' />
                        <div className='nurse-information'>
                            <h4 className='name'>Fullname:{firstName} {lastName}</h4>
                            <h4> skill:{skills}</h4>

                            <h4>rate: {rate}</h4>
                        </div>
                        <Link to={`/nurses/${username}`}><button className='card_button11'>More Info</button></Link>
                    </div>

                ))}



            </div>

        </div>
    )
}

export default FetchNurses