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
            <img className="description__photo" src={descriptionPhoto} alt="Description" />
          </div>
        </section>
    );
}


export default Description;