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
                <div className='about-section__text-box'>
                    <p>My journey as a developer started during the period of my Bachelor on Chemical Engineering. It was love at first lesson, when I had contact with a <span>programming</span> discipline. Back then I didn't know, but one year later I realised that I was much more into <span>Computer Science and Programming</span> than Chemical Engineering.</p>
                    <br/>
                    <p>During the University years I developed myself in several ways. I had contact with all sorts of technological fields. <span>Machine learning</span>, <span>Mobile Development</span>, <span>Web Development</span>, <span>Internet of Things</span>... Just to cite some of them... I worked and exchanged knowledge with incredible teachers, tutors and colleagues. </p>
                    <br/>
                    <p>But what caught my heart was Web Development. <span>Front-end Development</span>, more specifically. This is the field I get myself studying, reading about and practicing in most of my free time.</p>
                    <br/>
                    <p>I'm <span>curious</span> by nature. Always trying to understand new concepts and ways to find a <span>solution to a problem</span>.</p>
                    <p>Writing <span>clean code</span>, that is <span>acessible</span> to others it's what motivates me to always improve while coding.</p>
                    <br/>
                    <p>I have a <span>Bsc. in Computer Science</span> from PUC-Rio University, ranked at <span>first</span> in the Brazil IT Universities Ranking (ENADE ranking)</p>
                    <br/>
                    <p>My college internships helped me grown as a <span>software developer professional</span>. My first internship was as a <span>Mobile Developer</span>, using mainly <span>React Native</span> and <span>Mongodb</span>. This experience inserted me into a startup development environment, where I was in touch with the <span>Agile Methodology</span> and where I had plenty interaction with Seniors, Juniors, CEOs, Designers, Economists and HRs.</p>
                    <p>Another internship that added a lot to my professional growth was the <span>Web App Gradys Groundstation</span>. This project sponsored by the <span>U.S. Air Force</span>, accomplished remarkable goals in the study of <span>devices network communication</span>. My tutors gave me freedom to create, in my own way, an Web App to monitor/control a mobile network of devices. This kind of freedom helped me develop a <span>professional responsibility</span>, to make the best product decisions.</p>
                    <br/>
                    <p>Complementary professional specialization includes <span>Udemy Courses</span> (Javascript, React, Sass and Web Development) and <span>Rocketseat Course</span> (React Trail).</p>
                </div>

                <SectionTitle title={"Skills"} />
                <div className='about-section__skill-section'>
                    <h2 className='about-section__skill-section-title'>Programming languages</h2>
                    <ul className='about-section__skills-set'>
                        <SkillIcon icon={ <FaJs /> } title={"Javascript"} />
                        <SkillIcon icon={ <FaHtml5 /> } title={"HTML5"} />
                        <SkillIcon icon={ <FaCss3Alt /> } title={"CSS3"} />
                        <SkillIcon icon={ <SiDart /> } title={"Dart"} />
                        <SkillIcon icon={ <SiTypescript /> } title={"Typescript"} />
                        <SkillIcon icon={ <FaPython /> } title={"Python"} />
                    </ul>
                </div>
                <div className='about-section__skill-section'>
                    <h2 className='about-section__skill-section-title'>Frameworks/Libs</h2>
                    <ul className='about-section__skills-set'>
                        <SkillIcon icon={ <FaReact /> } title={"React.js"} />
                        <SkillIcon icon={ <TbBrandReactNative /> } title={"React Native"} />
                        <SkillIcon icon={ <FaSass /> } title={"Sass"} />
                        <SkillIcon icon={ <SiStyledcomponents /> } title={"Styled-Components"} />
                        <SkillIcon icon={ <SiRedux /> } title={"Redux"} />
                        <SkillIcon icon={ <SiFlutter /> } title={"Flutter"} />
                        <SkillIcon icon={ <SiFirebase /> } title={"Firebase"} />
                        <SkillIcon icon={ <SiDjango /> } title={"Django"} />
                        <SkillIcon icon={ <FaConnectdevelop /> } title={"Websockets"} />
                    </ul>
                </div>
            </div>
            <NextSection title="Contact Me" sectionId="contact" />
        </section>
    );
}

export default About;