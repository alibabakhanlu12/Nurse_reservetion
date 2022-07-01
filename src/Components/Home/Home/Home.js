import React from 'react'
import "./Home.css"
import HomeCarousel from './HomeCarousel';
import HomeSlider from './HomeSlider'
import Footer from '../Footer/Footer'
import ServiseInfo from './Inofrmations/HomeServiseInfo'
function Home() {


    return (
        <div>

            <HomeSlider />
            <h2 className='title_ourservises'> Health Services for you</h2>
            <p className='p-ourservises'> we are always here to listening and Understanding</p>
            <div className="our_servises">
                {
                    ServiseInfo.map((item) => (
                        <div key={item.index} className={item.servise}>

                            <h3 className={item.icon_class} > <img src={item.icon} />  </h3>

                            <h3 className={item.title_class}> {item.title}</h3>
                            <p className={item.describtion_class}> {item.describtion} </p>
                        </div>
                    ))
                }
            </div>

            <HomeCarousel />



            <Footer />
        </div >
    )
}

export default Home
