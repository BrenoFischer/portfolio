import { IconContext } from 'react-icons';

import './skill-icon.styles.scss';

const SkillIcon = ({iconSize = "5rem", icon, title}) => {
    return (
        <div className='skill'>
            <IconContext.Provider value={{ size: iconSize, className: "global-class-name" }}>
                <div className='skill-icon'>
                    {icon}
                </div>
            </IconContext.Provider> 
            
            <div className='skill-title'>{title}</div>
        </div>
    );
}

export default SkillIcon;