import descriptionPhoto from '../../assets/description-photo1.1.png';

import './description.styles.scss';

const Description = () => {
    return (
        <section className="description">
          <div className="description__text">
            <h1 className='description__text-title'>Hello, I'm Breno!<br/>I'm a <span>Front-end Developer</span></h1>
            <p className='description__text-paragraph margin-top-small'>I was hooked by front-end development since my first HTML code &#x1F4BB;</p>
            <p className='description__text-paragraph'>Throughout my time at the university and as an IT professional, I got</p>
            <p className='description__text-paragraph'>in touch with multiple techs - from machine learning to mobile dev.</p>
          </div>
          <div className="description__photo-box">
            <div class="description__photo-box-bubble">Hi!</div>
            <div class="description__photo-box-pointer"></div>
            <div class="description__photo-box-bubble bubble-2">Welcome to my portfolio</div>
            <div class="description__photo-box-pointer pointer-2"></div>
            <div class="description__photo-box-bubble bubble-2">Welcome to my portfolio</div>
            <div class="description__photo-box-pointer pointer-2"></div>
            <div class="description__photo-box-bubble bubble-3">Explore my projects!</div>
            <div class="description__photo-box-pointer pointer-3"></div>
            <div class="description__photo-box-bubble bubble-4">Read more about my journey</div>
            <div class="description__photo-box-pointer pointer-4"></div>
            <div class="description__photo-box-bubble bubble-5">You can easily "Contact me"</div>
            <div class="description__photo-box-pointer pointer-5"></div>
            <img className="description__photo" src={descriptionPhoto} alt="Description" />
          </div>
        </section>
    );
}


export default Description;