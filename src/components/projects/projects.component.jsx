// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

import { Link } from "react-router-dom";

import Button from '../button/button.component';
import NextSection from '../next-section/next-section.component';

import flamengoImage from '../../assets/projects-images/flamengo.png'
import groundstationImage from '../../assets/projects-images/groundstation.gif'
import vipImage from '../../assets/projects-images/vip-logo.jpg';
import closerImage from '../../assets/projects-images/closer.png';
import reactImage from '../../assets/projects-images/react.gif';
import travelogImage from '../../assets/projects-images/travelog.png';
import sassImage from '../../assets/projects-images/sass.gif';

import './projects.styles.scss';
import SectionTitle from '../section-title/section-title.component';

const Project = ({ image, title, descriptionText, stacks, href }) => {
    // const photoVariant = {
    //     visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    //     hidden: { opacity: 0, x: -400 },
    // };

    // const descriptionVariant = {
    //     visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    //     hidden: { opacity: 0, x: 400 },
    // };

    // const control = useAnimation();
    // const [ref, inView] = useInView();

    // useEffect(() => {
    //     if (inView) {
    //         control.start("visible");
    //     }
    //     // else {
    //     //     control.start("hidden");
    //     // }
    // }, [control, inView]);

    return (
        // <div className="project">
        //     <motion.div
        //         ref={ref}
        //         variants={photoVariant}
        //         initial="hidden"
        //         animate={control}
        //         className='project__photo-box' style={{backgroundImage: `url(${image})`}} 
        //     />
        //     <motion.div 
        //         ref={ref}
        //         variants={descriptionVariant}
        //         initial="hidden"
        //         animate={control}
        //         className='project__description'
        //     >
        //         <h2 className='project__title'>{title}</h2>
        //         <div className='project__stacks'>
        //             {stacks.map((stack) => {
        //                 return <div className='project__stack'>{stack}</div>
        //             })}
        //         </div>
        //         <div className='project__description-text'>
        //             <p>{descriptionText}</p>
        //         </div>
        //         <div className='project__btn-box'>
        //             <Button buttonText={"View project"} />
        //             <a href={link} target="_blank" rel="noreferrer">View on Github <span>&#x2197;</span></a>
        //         </div>
        //     </motion.div>
        // </div>

        <li className="project">
            <div className='project__photo-box' style={{backgroundImage: `url(${image})`}} />
            <div className='project__description'>
                <h2 className='project__title'>{title}</h2>
                <ul className='project__stacks'>
                    {stacks.map((stack) => {
                        return <li key={stack} className='project__stack'>{stack}</li>
                    })}
                </ul>
                <div className='project__description-text'>
                    {[...descriptionText]}
                </div>
                <div className='project__btn-box'>
                    <Button buttonText={"View on Github"} href={href} />
                    {/* <a href={link} target="_blank" rel="noreferrer">View on Github <span>&#x2197;</span></a> */}
                </div>
            </div>
        </li>
    )
}

const Projects = () => {
    const stacksFlamengo = ["Typescript", "React", "HTML5", "CSS3", "Firebase", "Styled-Components"];
    const stacksGS = ["Javascript", "HTML5", "CSS3", "Python", "Django","Websockets", "ESP32"];
    const stacksVip = ["Javascript", "HTML5", "CSS3", "React", "Redux", "Sass", "Firebase"];
    const stacksCloser = ["Javascript", "HTML5", "CSS3", "React", "Sass"];
    const stacksReact = ["Javascript", "Typescript", "HTML5", "CSS3", "React", "Redux", "Firebase", "Styled-Components", "Sass", "GraphQL"];
    const stacksTravelog = ["Dart", "Flutter", "Firebase", "MaterialUI"];
    const stacksSass = ["Javascript", "HTML5", "CSS3", "Sass"];

    const hrefFlamengo = "https://github.com/BrenoFischer/flamengo-titles";
    const hrefGS = "https://github.com/BrenoFischer/gradys-gs";
    const hrefVip = "https://github.com/BrenoFischer/vip-beauty-rooms";
    const hrefCloser = "https://github.com/BrenoFischer/Closer";
    const hrefReact = "https://github.com/BrenoFischer/Udemy-ReactJS";
    const hrefTravelog = "https://github.com/BrenoFischer/Travelog";
    const hrefSass = "https://github.com/BrenoFischer/Udemy-SCSS";

    const descriptionTextFlamengo = [
        <p>Explore the main <b>glories of Flamengo</b> throughout another century of history.</p>,
        <br/>,
        <p>Informative website, full of <b>historical facts</b>, <b>photographs</b> and <b>statistics</b>, about the main trophies that the biggest footbal team in Brazil has won so far.</p>,
        <br/>,
        <p>Access it on: <Link to="https://flamengo-titles.netlify.app/"><b>https://flamengo-titles.netlify.app/</b></Link></p>
    ]

    const descriptionTextGs = [
        <p>I created a <b>Web App</b> from scratch, to monitor, control and display Mobile Networks (drones).</p>,
        <br/>,
        <p>With a simple, yet <b>customizable interface</b>, this projects enables user to monitor a network in real time, add command buttons, protocols and much more!</p>,
        <br/>,
        <p>This App is not deployed and should be run locally</p>
    ]

    const descriptionTextVip = [
        <p><b>Web App</b> for a local beauty saloon.</p>,
        <br/>,
        <p>All design was done following the client request. The focus is to present services and information with a <b>simple interface</b>. Authentication/database done with <b>Firebase</b>, allowing managers to <b>edit/add/remove</b> relevant information</p>,
        <p>You can see it live on </p>,
        <Link to='https://uniquebeauty-limerick.com/'><b>uniquebeauty-limerick.com/</b></Link>
    ]

    const descriptionTextCloser = [
        <p>Landing page for <Link to='https://socialimpactireland.ie/'><b>Social Impact Ireland</b></Link> project.</p>,
        <br/>,
        <p>Closer is designed to bring the social enterprise community together. The landing page presents all project features and a simple way to contact the company</p>,
        <br/>,
        <p>You can see working in progress live on </p>,
        <Link to='https://closer-si.netlify.app/'><b>closer-si.netlify.app/</b></Link>
    ]

    const descriptionTextCrown = [
        <p>This project is a fake clothing store, to practice mainly <b>React</b> concepts and its environment.</p>,
        <br/>,
        <p>All design and implementation was done following the React course from Udemy. Some concepts studied were <b>Hooks</b>, <b>Redux</b>, <b>Firebase</b> and <b>Typescript</b></p>,
        <br/>,
        "More about the Udemy Course ",
        <Link to='https://www.udemy.com/course/complete-react-developer-zero-to-mastery/'><b>here.</b></Link>,
        
        <br/>,
        "You can see it live on ",
        <Link to='https://udemy-react-crown.netlify.app/'><b>udemy-react-crown.netlify.app/</b></Link>
    ]

    const descriptionTextTravelog = [
        <p>Your <b>travel diary</b> anywhere you want it to be!</p>,
        <br/>,
        <p>Travelog is a product created for my college discipline <b>(Flutter)</b>. It's a platform to <b>write</b>, <b>share</b> and <b>explore</b> digital reports of travel experiences.</p>,
        <br/>,
        <p>This App is not deployed and should be run locally</p>
    ]

    const descriptionTextNatours = [
        <p>This project is set of projects, to practice mainly <b>Advanced CSS</b> and <b>Sass</b>.</p>,
        <br/>,
        <p>All design and implementation was done following the CSS course from Udemy. Some concepts studied were <b>Animations with CSS</b>, <b>Sass</b>, <b>Flexbox</b> and <b>Grid</b></p>,
        <br/>,
        "More about the Udemy Course ",
        <Link to='https://www.udemy.com/course/advanced-css-and-sass/'><b>here.</b></Link>,
        
        <br/>,
        <p>This App is not deployed and should be run locally</p>
    ]

    return (
        <section className='projects-section' id="projects">
            <SectionTitle title={"Projects"} />
            <ul className='projects-box'>
                <Project 
                    image={flamengoImage}
                    title={"Flamengo Titles"}
                    descriptionText={descriptionTextFlamengo}
                    stacks={stacksFlamengo}
                    href={hrefFlamengo}
                />
                <Project 
                    image={groundstationImage}
                    title={"UAV Groundstation"}
                    descriptionText={descriptionTextGs}
                    stacks={stacksGS}
                    href={hrefGS}
                />
                <Project 
                    image={vipImage}
                    title={"Unique Beauty Limerick"}
                    descriptionText={descriptionTextVip}
                    stacks={stacksVip}
                    href={hrefVip}
                />
                <Project 
                    image={closerImage}
                    title={"Closer"}
                    descriptionText={descriptionTextCloser}
                    stacks={stacksCloser}
                    href={hrefCloser}
                />
                <Project 
                    image={reactImage}
                    title={"Crown Clothing"}
                    descriptionText={descriptionTextCrown}
                    stacks={stacksReact}
                    href={hrefReact}
                />
                <Project 
                    image={travelogImage}
                    title={"Travelog"}
                    descriptionText={descriptionTextTravelog}
                    stacks={stacksTravelog}
                    href={hrefTravelog}
                />
                <Project 
                    image={sassImage}
                    title={"Natours"}
                    descriptionText={descriptionTextNatours}
                    stacks={stacksSass}
                    href={hrefSass}
                />
            </ul>
            <NextSection title="More about me" secondary={true} sectionId="about" />
        </section>
    );
}

export default Projects;