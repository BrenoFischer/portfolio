import './about.styles.scss';

import { IconContext } from 'react-icons';
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaSass } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiStyledcomponents, SiRedux, SiFlutter, SiDart, SiTypescript, SiFirebase } from "react-icons/si";

const SkillIcon = ({icon, title}) => {
    return (
        <div className='about-section__skill'>
            <IconContext.Provider value={{ size: "5rem", className: "global-class-name" }}>
                <div className='about-section__skill-icon'>
                    {icon}
                </div>
            </IconContext.Provider> 
            
            <div className='about-section__skill-title'>{title}</div>
        </div>
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
                    <SkillIcon icon={ <FaHtml5 /> } title={"HTML5"} />
                    <SkillIcon icon={ <FaCss3Alt /> } title={"CSS3"} />
                    <SkillIcon icon={ <FaReact /> } title={"React.js"} />
                    <SkillIcon icon={ <TbBrandReactNative /> } title={"React Native"} />
                    <SkillIcon icon={ <FaSass /> } title={"Sass"} />
                    <SkillIcon icon={ <SiStyledcomponents /> } title={"Styled-Components"} />
                    <SkillIcon icon={ <SiRedux /> } title={"Redux"} />
                    <SkillIcon icon={ <SiFlutter /> } title={"Flutter"} />
                    <SkillIcon icon={ <SiDart /> } title={"Dart"} />
                    <SkillIcon icon={ <SiFirebase /> } title={"Firebase"} />
                    <SkillIcon icon={ <SiTypescript /> } title={"Typescript"} />
                </div>
            </div>
        </section>
    );
}

export default About;