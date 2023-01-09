import Button from '../button/button.component';

import groundstationImage from '../../assets/projects-images/groundstation.gif'
import vipImage from '../../assets/projects-images/vip.png';
import reactImage from '../../assets/projects-images/react.gif';
import travelogImage from '../../assets/projects-images/travelog.png';
import sassImage from '../../assets/projects-images/sass.gif';

import './projects.styles.scss';

const Project = ({ image, title, descriptionText, stacks }) => {
    return (
        <div className='project'>
            <div className='project__photo-box' style={{backgroundImage: `url(${image})`}}></div>
            <div className='project__description'>
                <h2 className='project__title'>{title}</h2>
                <div className='project__stacks'>
                    {stacks.map((stack) => {
                        return <div className='project__stack'>{stack}</div>
                    })}
                    {/* <div className='project__stack'>HTML5</div>
                    <div className='project__stack'>CSS3</div> */}
                </div>
                <div className='project__description-text'>
                    <p>{descriptionText}</p>
                </div>
                <div className='project__btn-box'>
                    <Button buttonText={"View project"} />
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    const stacksGS = ["Javascript", "HTML5", "CSS3", "Python", "Django","Websockets", "ESP32"];
    const stacksVip = ["Javascript", "HTML5", "CSS3", "React", "Sass"];
    const stacksReact = ["Javascript", "Typescript", "HTML5", "CSS3", "React", "Redux", "Firebase", "Styled-Components", "Sass", "GraphQL"];
    const stacksTravelog = ["Dart", "Flutter", "Firebase", "MaterialUI"];
    const stacksSass = ["Javascript", "HTML5", "CSS3", "Sass"];

    return (
        <section className='projects-section'>
            <div className='projects-section__title-box'>
                <h2 className='projects-section__title'>Projects</h2>
                <div className='projects-section__title-border'></div>
            </div>
            <div className='projects-box'>
                <Project 
                    image={groundstationImage}
                    title={"UAV Groundstation"}
                    descriptionText={"Text text a big description text to explain and introduce the project. Make sure to don't make it so big, but also has all the contect necessary to reader understand what this is about"}
                    stacks={stacksGS}
                />
                <Project 
                    image={vipImage}
                    title={"VIP Beauty Rooms"}
                    descriptionText={"Text text a big description text to explain and introduce the project. Make sure to don't make it so big, but also has all the contect necessary to reader understand what this is about"}
                    stacks={stacksVip}
                />
                <Project 
                    image={reactImage}
                    title={"Crown Clothing"}
                    descriptionText={"Text text a big description text to explain and introduce the project. Make sure to don't make it so big, but also has all the contect necessary to reader understand what this is about"}
                    stacks={stacksReact}
                />
                <Project 
                    image={travelogImage}
                    title={"Travelog"}
                    descriptionText={"Text text a big description text to explain and introduce the project. Make sure to don't make it so big, but also has all the contect necessary to reader understand what this is about"}
                    stacks={stacksTravelog}
                />
                <Project 
                    image={sassImage}
                    title={"Natours"}
                    descriptionText={"Text text a big description text to explain and introduce the project. Make sure to don't make it so big, but also has all the contect necessary to reader understand what this is about"}
                    stacks={stacksSass}
                />
            </div>
        </section>
    );
}

export default Projects;