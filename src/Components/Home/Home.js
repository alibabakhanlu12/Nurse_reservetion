import React from 'react'
import "./Home.css"

import ChildHelp from '../../assets/care-icon-25.jpg';
import OldManHelp from '../../assets/2512403.png';
import Reserve from '../../assets/reserve.png';

import HomeCarousel from './HomeCarousel';

import HomeSlider from './HomeSlider'
import Footer from './Footer/Footer'
function Home() {

    // const info = [
    //     {
    //         icon: '',
    //         icon_class: 'i-s1',
    //         title: '',
    //         title_class: '',
    //         describtion: '',
    //         describtion_class: '',
    //         index: '1'

    //     }
    //     , {
    //         icon: '',
    //         icon_class: 'i-s2',
    //         title: '',
    //         title_class: '',
    //         describtion: '',
    //         describtion_class: '',
    //         index: '2'

    //     }
    //     ,
    //     {
    //         icon: '',
    //         icon_class: 'i-s1',
    //         title: '',
    //         title_class: '',
    //         describtion: '',
    //         describtion_class: '',
    //         index: '3'

    //     }
    //  ]
    return (
        <div>

            <HomeSlider />

            <h2 className='title_ourservises'> Health Services for you</h2>
            <p className='p-ourservises'> we are always here to listening and Understanding</p>
            <div className="our_servises">
                <div className='servise1'>

                    <h3 className='i-s1' > <img src={Reserve} />  </h3>

                    <h3 className='title_s1'>  Online reservation</h3>
                    <p className='p-s1'>If you are looking for a nurse to take care of
                        your elderly or baby, but it is difficult for you to go out or you do not have enough
                        time to do it, you can visit our site and book the nurse you want. </p>
                </div>
                <div className='servise2' >
                    <h3 className='i-s2'> <img src={OldManHelp} />  </h3>

                    <h3 className='title_s2'>Elderly care</h3>
                    <p className='p-s2'>If you have an elderly person in your home who is
                        difficult to care for, do not worry at all and
                        leave it to our experienced and professional staff. Leave it to us.</p>
                </div>
                <div className='servise3'>

                    <h3 className='i-s3'>   <img src={ChildHelp} /> </h3>
                    <h3 className='title_s3'>Child care</h3>
                    <p className='p-s3'>If caring for your baby is difficult for you,
                        do not worry at all. We have professional
                        nurses in our collection to take care of the baby,
                        so leave it to us.</p>
                </div>
                <div className='servise4'></div>



            </div>



            <HomeCarousel />



            <Footer />
        </div >
    )
}

export default Home
