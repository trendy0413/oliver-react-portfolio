import React from 'react';
import './Home.css';
import Me from '../../assets/me.jpg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='130' />
                <h1 className="home__name">Oliver He</h1>
                <span className="home__education">Programmer isn’t a job; it’s a mindset.</span>

                <HeaderSocials />

                <a href="#contact" className="btn"> Contact Me</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home