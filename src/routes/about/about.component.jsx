import './about.styles.scss';

import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaSass, FaPython, FaConnectdevelop } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiStyledcomponents, SiRedux, SiFlutter, SiDart, SiTypescript, SiFirebase, SiDjango } from "react-icons/si";


import NextSection from '../../components/next-section/next-section.component';
import SectionTitle from '../../components/section-title/section-title.component';
import SkillIcon from '../../components/skill-icon/skill-icon.components';

const About = () => {
    return (
        <section className="about-section" id="about">
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
            <NextSection title="Contact Me" sectionId="contact" />
        </section>
    );
}

export default About;