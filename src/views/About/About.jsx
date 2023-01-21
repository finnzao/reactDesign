import React from "react";
import Titllelarge from "../../components/TitleLarge/TitleLarge";
function About() {

    return (
        <section className='about'>
            <Titllelarge text="Por que você precisa de nosso serviço?"></Titllelarge>


            <h1 className='aboutTitle'></h1>
            <div className='aboutDivision'> <div className='division'></div></div>
            <div className='aboutItens'>
                <ul className='aboutList'>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </section>

    )
}

export default About;