import React from "react";
import TitleHome from './TitleHome/home';
import Portfolio from './Portfolio/portfolio';
import DivisionGrey from '../../components/divisionPage/DivsionPageGrey/Division';
import DivisionGreen from '../../components/divisionPage/DivisonPageGreen/Division';
import About from './About/About';
import AboutMe from './AboutMe/AboutMe';
import Footer from './Footer/Footer';
import Navbar from '../../components/layout/NavBar/Navbar'

function Home() {

    return (
        <>
            <Navbar />
            <TitleHome />
            <Portfolio></Portfolio>
            <About></About>
            <DivisionGrey></DivisionGrey>
            <AboutMe></AboutMe>
            <DivisionGrey></DivisionGrey>
            <Footer></Footer>
        </>
    )
}

export default Home;