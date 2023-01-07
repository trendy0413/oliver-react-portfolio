import React from 'react';
import './About.css';
import Image from '../../assets/aboutme.png';
// import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    // const downloadResume = async () => {
    //     window.open(Resume, '_blank');
    // }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello there! My name is Oliver. I am a Full-Stack Developer who is passionate about building high quality web applications.
                            I have 6 years of experience in the field and mainly working on enterprise and startup projects from scratch.
                            I am always passionate about expanding my knowledge and able to work together with teams from other countries.
                            In my free time, I like to read books and go swimming.
                        </p>
                        Here are things what I ❤ most:<br />
                        <ul className="about__list">
                            <li>Code</li>
                            <li>Family</li>
                            <li>Swimming</li>
                            <li>Morning</li>
                            <li>Smile</li>
                            <li>And Code😅</li>
                        </ul>
                        {/* Alright, since you've read this far, have a joke: Why are mountains so funny? Because they're hill areas.<br/> */}
                        {/* <button className="btn" onClick={downloadResume}>Donwload CV</button> */}
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About