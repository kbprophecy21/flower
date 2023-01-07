import React from "react";
import './Main.css';
import img from './assets/crochet_purple.jpg';


function Main() {

    return (
        <div className="main-section">
            <img className="img-content" src={img}></img>

            <section className='side-section'>
                <h2>Alter, Repair & Mend</h2>
                <p>
                    This is a great space to write long text about your company and your services.
                    You can use this space to go into a little more detail about your company.
                    Talk about your team and what services you provide.
                    Tell your visitors the story of how you came up with the idea for your business
                    and what makes you different from your competitors.
                    Make your company stand out and show your visitors who you are.
                </p>

            </section>





        </div>
    )
}


export default Main;
