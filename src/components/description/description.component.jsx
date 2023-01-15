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
              <h1 className='description__text-title'>Hello, I'm Breno!<br/>I'm a <span>Front-end Developer</span></h1>
              <p className='description__text-paragraph margin-top-small'>I was hooked by front-end development since my first HTML code &#x1F4BB;</p>
              <p className='description__text-paragraph'>Throughout my time at the university and as an IT professional, I got</p>
              <p className='description__text-paragraph'>in touch with multiple techs - from machine learning to mobile dev.</p>
            </div>
            <div className="description__photo-box">
              <div className="description__photo-box-bubble">Hi!</div>
              <div className="description__photo-box-pointer"></div>
              <div className="description__photo-box-bubble bubble-2">Welcome to my portfolio</div>
              <div className="description__photo-box-pointer pointer-2"></div>
              <div className="description__photo-box-bubble bubble-2">Welcome to my portfolio</div>
              <div className="description__photo-box-pointer pointer-2"></div>
              <div className="description__photo-box-bubble bubble-3">Explore my projects!</div>
              <div className="description__photo-box-pointer pointer-3"></div>
              <div className="description__photo-box-bubble bubble-4">Read more about my journey</div>
              <div className="description__photo-box-pointer pointer-4"></div>
              <div className="description__photo-box-bubble bubble-5">You can easily "Contact me"</div>
              <div className="description__photo-box-pointer pointer-5"></div>
              
              <img className="description__photo" src={descriptionPhoto} alt="Description" />
              
              <div className='description__icons'>
                <IconButton icon={<ImGithub />} label={"Github"} />
                <IconButton icon={<FaLinkedin />} label={"LinkedIn"} />
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