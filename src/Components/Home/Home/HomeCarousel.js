import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Home.css'
import info from './Inofrmations/HomeCarouselnfo'
function HomeCarousel() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>

            <h1 className='title_topnurses'>Top Nurses</h1>
            <h3 className='des_nurses'>In this section, you can see the top nurses in our collection </h3>
            <div className='top_nurses'></div>
            <Carousel responsive={responsive}>
                {
                    info.map((item) => (
                        <div key={item.index} className="nurse1"><img src={item.image} alt='nurse' className="nurse_1" />
                            <h5 className='nurse_name'>Name: {item.name}</h5>
                            <h5 className='nurse_skill'> Skill: {item.Skill} </h5>
                            <h5 className='nurse_skill'> education: {item.education} </h5>
                            <h5 className='nurse_rate'>Satisfaction : {item.satisfaction}</h5>
                        </div>

                    ))}

            </Carousel>

        </div>
    )
}

export default HomeCarousel