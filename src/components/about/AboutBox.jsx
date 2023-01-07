import React from 'react'
import { RiFireLine, RiCupLine, RiRocket2Fill, RiTrophyLine } from 'react-icons/ri';

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <RiFireLine className='about__icon' />

                <div>
                    <h3 className="about__title">6</h3>
                    <span className="about__subtitle">Years of Experience</span>
                </div>
            </div>

            {/* <div className="about__box">
                <RiCupLine className='about__icon' />

                <div>
                    <h3 className="about__title">31</h3>
                    <span className="about__subtitle">Github Repositories</span>
                </div>
            </div> */}

            <div className="about__box">
                <RiRocket2Fill className='about__icon' />

                <div>
                    <h3 className="about__title">14</h3>
                    <span className="about__subtitle">Launched Projects</span>
                </div>
            </div>

            {/* <div className="about__box">
                <RiTrophyLine className='about__icon' />

                <div>
                    <h3 className="about__title">100</h3>
                    <span className="about__subtitle">Code Quality</span>
                </div>
            </div> */}
        </div>
    )
}

export default AboutBox