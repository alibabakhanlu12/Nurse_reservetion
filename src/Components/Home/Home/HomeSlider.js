import React from 'react'
import './Slider.css'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Link } from "react-router-dom"

function HomeSlider() {
    const content = [
        {
            title: "Servises",
            description: "Our site has various services such as babysitting nurses, elderly care, injections, etc.",
            button: {
                name: 'servises',
                link: '/servises'
            },
            image: "https://st2.depositphotos.com/2249091/8684/i/950/depositphotos_86849706-stock-photo-taking-mans-blood.jpg",
            index: 1
        },
        {
            title: "  List of Nurses",
            description:
                "you can see list all of nurses and there skills, education, satisfaction and other things ",
            button: {
                name: 'Reserve Now',
                link: '/nurses'
            },
            image: "https://theresiliencysolution.com/wp-content/uploads/2021/02/happy-doctors-nurses-1536x864.png",
            index: 2
        },
        {
            title: " Contact Us",
            description:
                "you can contact with us andIf there is a problem or if you have a criticism or suggestion, you can contact us ",
            button: {
                name: 'Contact us',
                link: '/contact-us'
            },
            image: "https://img.freepik.com/fotos-kostenlos/kontaktiere-uns_36325-2135.jpg?w=996",
            index: 3,
            // page:
        }
    ];

    return (
        <div>             <Slider autoplay={4000}>
            {content.map((item, index) => (
                <div
                    key={index}
                    style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                    <div className='center'  >
                        <h1 className='title1'>{item.title}</h1>
                        <p className='description'>{item.description}</p>
                        <button className='btn11'> <Link to={item.button.link}>{item.button.name}</Link></button>
                    </div>
                </div>
            ))}
        </Slider>
        </div>
    )
}

export default HomeSlider