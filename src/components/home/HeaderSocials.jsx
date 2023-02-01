import React from 'react';
import { FaGithub, FaTelegram, FaDiscord, FaSkype, FaGoogle, FaLinkedinIn, FaFilePdf } from 'react-icons/fa';
// import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://www.github.com/trendy0413' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/oliver-he-016a6b259/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='mailto:oliverhework@gmail.com' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGoogle />
            </a>

            <a href='https://join.skype.com/invite/thkdpADfglUY' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaSkype />
            </a>

            {/* <a href='https://t.me/oliver_he' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaTelegram />
            </a> */}

            <a href='https://discord.gg/jFJT45Wd' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDiscord />
            </a>

            <a href='https://cvdesignr.com/p/636b84896afd8' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFilePdf />
            </a>

        </div>
    );
};

export default HeaderSocials;
