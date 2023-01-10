import './about.styles.scss';

import { IconContext } from 'react-icons';
import { FaJs } from "react-icons/fa";

const SkillIcon = ({icon, title}) => {
    return (
        <>
            <IconContext.Provider value={{ color: "white", size: "5rem", className: "global-class-name" }}>
                <div className='about-section__skill-icon'>
                    {icon}
                </div>
            </IconContext.Provider> 
            
            <div className='about-section__skill-title'>{title}</div>
        </>
    );
}

const About = () => {
    return (
        <section className="about-section">
            <div className='about-section__half-left'>
                <div className='about-section__title-box'>
                    <h2 className='about-section__title'>About</h2>
                    <div className='about-section__title-border'></div>
                </div>
            </div>
            <div className='about-section__half-right'>
                <div className='about-section__title-box'>
                    <h2 className='about-section__title'>Skills</h2>
                    <div className='about-section__title-border'></div>
                </div>
                <div className='about-section__skills-box'>
                    <SkillIcon icon={ <FaJs /> } title={"Javascript"} />
                </div>
            </div>
        </section>
    );
}

export default About;