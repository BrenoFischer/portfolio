import { IconContext } from 'react-icons';

import { FaChevronDown } from "react-icons/fa";

import './next-section.styles.scss';

const NextSection = ({ title, secondary=false }) => {
    return secondary ? 
    (
        <div className='next-section'>
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
        <div className='next-section'>
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