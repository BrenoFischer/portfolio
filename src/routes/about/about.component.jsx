import './about.styles.scss';

import { IconContext } from 'react-icons';
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaSass, FaPython, FaConnectdevelop } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiStyledcomponents, SiRedux, SiFlutter, SiDart, SiTypescript, SiFirebase, SiDjango } from "react-icons/si";


import NextSection from '../../components/next-section/next-section.component';
import SectionTitle from '../../components/section-title/section-title.component';

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
            <div className='about-section__content'>
                <SectionTitle title={"About"} />
                <div className=''></div>

                <SectionTitle title={"Skills"} />
                <div className='about-section__skill-section'>
                    <h2 className='about-section__skill-section-title'>Programming languages</h2>
                    <div className='about-section__skills-set'>
                        <SkillIcon icon={ <FaJs /> } title={"Javascript"} />
                        <SkillIcon icon={ <FaHtml5 /> } title={"HTML5"} />
                        <SkillIcon icon={ <FaCss3Alt /> } title={"CSS3"} />
                        <SkillIcon icon={ <SiDart /> } title={"Dart"} />
                        <SkillIcon icon={ <SiTypescript /> } title={"Typescript"} />
                        <SkillIcon icon={ <FaPython /> } title={"Python"} />
                    </div>
                </div>
                <div className='about-section__skill-section'>
                    <h2 className='about-section__skill-section-title'>Frameworks/Libs</h2>
                    <div className='about-section__skills-set'>
                        <SkillIcon icon={ <FaReact /> } title={"React.js"} />
                        <SkillIcon icon={ <TbBrandReactNative /> } title={"React Native"} />
                        <SkillIcon icon={ <FaSass /> } title={"Sass"} />
                        <SkillIcon icon={ <SiStyledcomponents /> } title={"Styled-Components"} />
                        <SkillIcon icon={ <SiRedux /> } title={"Redux"} />
                        <SkillIcon icon={ <SiFlutter /> } title={"Flutter"} />
                        <SkillIcon icon={ <SiFirebase /> } title={"Firebase"} />
                        <SkillIcon icon={ <SiDjango /> } title={"Django"} />
                        <SkillIcon icon={ <FaConnectdevelop /> } title={"Websockets"} />
                    </div>
                </div>
            </div>
            <NextSection title={"Contact Me"} />
        </section>
    );
}

export default About;