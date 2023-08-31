import descriptionPhoto from '../../assets/description-photo1.1.png';
import NextSection from '../next-section/next-section.component';
import IconButton from '../icon-button/icon-button.component';

import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { TbMail } from "react-icons/tb";

import './description.styles.scss';

const Description = () => {
  return (
    <> 
      <section className="description-section" id="description">
        <div className="description">
          <div className="description__text">
            <h1 className='description__text-title'>Hello, I'm Breno<br/><span>Front-end Developer</span></h1>
            <p className='description__text-paragraph margin-top-small'>I was hooked by front-end development since my first HTML code 	<span>&#60;/&#62;</span></p>
            <p className='description__text-paragraph'>I'm passionate to bring to life ideas with my computer <span>&#x1F4BB;</span></p>
          </div>
          <div className="description__photo-box">
            <div className="description__photo-box-bubble"><p>Hi!</p></div>
            <div className="description__photo-box-pointer"></div>
            <div className="description__photo-box-bubble bubble-2"><p>Welcome to my <span>portfolio</span></p></div>
            <div className="description__photo-box-pointer pointer-2"></div>
            <div className="description__photo-box-bubble bubble-3">Explore my <span>projects!</span></div>
            <div className="description__photo-box-pointer pointer-3"></div>
            <div className="description__photo-box-bubble bubble-4">Read more about <span>my journey</span></div>
            <div className="description__photo-box-pointer pointer-4"></div>
            <div className="description__photo-box-bubble bubble-5">You can easily <span>"Contact me"</span></div>
            <div className="description__photo-box-pointer pointer-5"></div>
            
            <img className="description__photo" src={descriptionPhoto} alt="Description" />
            
            <div className='description__icons'>
              <IconButton icon={<ImGithub />} label={"Github"} url="https://github.com/BrenoFischer" />
              <IconButton icon={<FaLinkedin />} label={"LinkedIn"} url="https://www.linkedin.com/in/brenoperricone/" />
              <IconButton icon={<TbMail />} label={"Contact"} />
            </div>
          </div>
        </div>
        <NextSection title={"Explore Projects"} sectionId="projects" />
      </section>
    </>
  );
}


export default Description;