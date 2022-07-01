import { useState } from 'react';
import items from './allData';
import Menu from './Menu';
import Button from './Button';
import './Servises.css'


const allCategories = ['All', ...new Set(items.map(item => item.skills))];

console.log(allCategories);

function Servises() {
    const [menuItem, setMenuItem] = useState(items);
    const [buttons, setButtons] = useState(allCategories);

    const filter = (button) => {

        if (button === 'All') {
            setMenuItem(items);
            return;
        }

        const filteredData = items.filter(item => item.skills === button);
        setMenuItem(filteredData)
    }


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
