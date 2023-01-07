import React from "react";
import './Main.css';
import mens from './assets/mens.jpg';
import women from './assets/womens.jpg';
import decor from './assets/decor.jpg';
import accesories from './assets/accesories.jpg';


function Main() {

    return (
        <section className="main-section">

            <p className="text-men">Mens</p>
            <p className="text-women">Women</p>
            <p className="text-decor">Decor</p>
            <p className="text-accesories">Accesories</p>
            <img className='images' src={mens}></img>
            <img className="images" src={women}></img>
            <img className="images" src={decor}></img>
            <img className="images" src={accesories}></img>


        </section>
    )
}


export default Main;
