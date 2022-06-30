import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button } from "react-bootstrap";

import Nurse1 from '../../assets/nurse1.jpg'
import Nurse2 from '../../assets/nurse2.jpg'
import Nurse3 from '../../assets/nurse3.jpg'
import Nurse4 from '../../assets/nurse4.jpg'
import Nurse5 from '../../assets/nurse5.png'
function HomeCarousel() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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

    // const info = [
    //     {
    //         title: "Alberta",
    //         Skill: 'baby sitter',
    //         education: "PHD",
    //         satisfaction: '99%',
    //         image: 'nurse1',
    //         index:1
    //     },
    //     {
    //         title: "Alberta",
    //         Skill: 'baby sitter',
    //         education: "PHD",
    //         satisfaction: '99%',
    //         image: 'nurse2',
    //         index:2
    //     },
    //     {
    //         title: "Alberta",
    //         Skill: 'baby sitter',
    //         education: "PHD",
    //         satisfaction: '99%',
    //         image: 'nurse3',
    //         index:3
    //     },
    //     {
    //         title: "Alberta",
    //         Skill: 'baby sitter',
    //         education: "PHD",
    //         satisfaction: '99%',
    //         image: 'nurse4',
    //         index:4
    //     },
    //     {
    //         title: "Alberta",
    //         Skill: 'baby sitter',
    //         education: "PHD",
    //         satisfaction: '99%',
    //         image: 'nurse5',
    //         index:5
    //     },
    // ]

    return (
        <div>




            <h1 className='title_topnurses'>Top Nurses</h1>
            <div className='top_nurses'></div>
            <Carousel responsive={responsive}>



                <div className="nurse1"><img src={Nurse1} alt='nurse1' className="nurse_1" />
                    <div className='nurse_name'>Name:Alberta</div>
                    <div className='nurse_skill'> Skill: baby sitter </div>
                    <div className='nurse_skill'> education:Graduated from Harvard University </div>
                    <div className='nurse_rate'>Satisfaction : 99%</div>
                </div>


                <div className="nurse2"><img src={Nurse2} alt='nurse2' className="nurse_2" />
                    <div className='nurse_name'>Name:Alberta</div>
                    <div className='nurse_skill'> Skill: baby sitter </div>
                    <div className='nurse_skill'> education:Graduated from Harvard University </div>
                    <div className='nurse_rate'>Satisfaction : 99%</div>
                </div>

                <div className="nurse3"><img src={Nurse3} alt='nurse3' className="nurse_3" />
                    <div className='nurse_name'>Name:Alberta</div>
                    <div className='nurse_skill'> Skill: baby sitter </div>
                    <div className='nurse_skill'> education:Graduated from Harvard University </div>
                    <div className='nurse_rate'>Satisfaction : 99%</div>
                </div>

                <div className="nurse4"><img src={Nurse4} alt='nurse4' className="nurse_4" />
                    <div className='nurse_name'>Name:Alberta</div>
                    <div className='nurse_skill'> Skill: baby sitter </div>
                    <div className='nurse_skill'> education:Graduated from Harvard University </div>
                    <div className='nurse_rate'>Satisfaction : 99%</div>
                </div>
                <div className="nurse5"><img src={Nurse5} alt='nurse5' className="nurse_5" />
                    <div className='nurse_name'>Name:Alberta</div>
                    <div className='nurse_skill'> Skill: baby sitter </div>
                    <div className='nurse_skill'> education:Graduated from Harvard University </div>
                    <div className='nurse_rate'>Satisfaction : 99%</div>
                </div>

            </Carousel>

        </div>
    )
}

export default HomeCarousel