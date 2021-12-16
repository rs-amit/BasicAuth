import React,{useState} from 'react';
import "./Home.css";
import { StateHandler } from "../contextProvider/MainProvider";

function Home() {
    const {setState} = StateHandler();


    return (
        <div className="home">
            <h1 className='home-msg'>Welcome! for logout </h1>
            <button className='logout' onClick={()=>setState(false)}>Logout</button>
        </div>
    )
}

export default Home
