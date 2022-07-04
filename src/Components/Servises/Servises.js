import { useState } from 'react';
import NurseData from '../../NursesData'
import Menu from './Menu';
import Button from './Button';
import './Servises.css'
import { Helmet } from "react-helmet";


const allCategories = ['All', ...new Set(NurseData.map(item => item.skills))];


function Servises() {
    <Helmet>

        <title>Servises</title>

    </Helmet>
    const [menuItem, setMenuItem] = useState(NurseData);
    const [buttons, setButtons] = useState(allCategories);



    const filter = (button) => {

        if (button === 'All') {
            setMenuItem(NurseData);
            return;
        }

        const filteredData = NurseData.filter(item => item.skills === button);
        setMenuItem(filteredData)
    }


    <Helmet>

        <title>Servises</title>

    </Helmet>

    return (
        <div className="App1">

            <div className="title">
                <h1 className='title-ti'>   Servises </h1>
                <p className='title-des'> In this section, you can see all the nurses who are placed in separate categories based on their skills </p>
            </div>


            <Button button={buttons} filter={filter} />
            <Menu menuItem={menuItem} />
        </div>
    );
}

export default Servises;
