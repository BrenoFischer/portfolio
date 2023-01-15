import { IconContext } from 'react-icons';

import { FaChevronDown } from "react-icons/fa";

import './next-section.styles.scss';

const NextSection = ({ secondary=false, sectionId, title }) => {

    const scrollToNextSection = () => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } 
    }

    return secondary ? 
    (
        <div className='next-section' onClick={scrollToNextSection}>
            <p className='next-section__title-secondary'>{title}</p>
            <IconContext.Provider value={{ className: "global-class-name" }}>
                <div className='next-section__icon-box'>
                    <div className='next-section__icon' style={{fontSize: "3.5rem"}}>
                        <FaChevronDown />
                    </div>
                </div>
            </IconContext.Provider> 
      </div>
    )
    : 
    (
        <div className='next-section' onClick={scrollToNextSection}>
            <p className='next-section__title'>{title}</p>
            <IconContext.Provider value={{ className: "global-class-name" }}>
                <div className='next-section__icon-box'>
                    <div className='next-section__icon' style={{fontSize: "3.5rem", color: "white"}}>
                        <FaChevronDown />
                    </div>
                </div>
            </IconContext.Provider>
          </div>
    );
}

export default NextSection;