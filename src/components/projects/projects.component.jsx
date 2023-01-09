import Button from '../button/button.component';

import './projects.styles.scss';

const Project = () => {
    return (
        <div className='project'>
            <div className='project__photo-box'>
                <div className='project__photo'></div>
            </div>
            <div className='project__description'>
                <h2 className='project__title'>UAV Groundstation</h2>
                <div className='project__stacks'>
                    <div className='project__stack'>JS</div>
                    <div className='project__stack'>HTML5</div>
                    <div className='project__stack'>CSS3</div>
                </div>
                <div className='project__description-text'>
                    <p>A big drescription about the project I made, stating why this project is amazing
                        and introducing the project theme, the blablablabla blab
                    </p>
                </div>
                <div className='project__btn-box'>
                    <Button buttonText={"View project"} />
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <section className='projects-section'>
            <div className='projects-section__title-box'>
                <h2 className='projects-section__title'>Projects</h2>
                <div className='projects-section__title-border'></div>
            </div>
            <div className='projects-box'>
                <Project />
                <Project />
            </div>
        </section>
    );
}

export default Projects;