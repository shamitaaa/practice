import React, { useContext, useState } from 'react'
import MyContext from './MyContext'
import '../index.css'
import { Link } from 'react-router-dom';

const About = () => {
    const { name, age } = useContext(MyContext);
    const { count, increment } = useContext(MyContext);
    

    return (
        <div>
            <h3>My name is {name}</h3>
            <h3>My age is {age}</h3>
            <button className='button-inc' onClick={increment}>
                Increase Count {count}
            </button>
            <Link to="/">
            <button className='button-inc'>Back</button>
            </Link>
        </div>
    )
}

export default About