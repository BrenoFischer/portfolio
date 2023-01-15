import { IconContext } from 'react-icons';

import './icon-button.styles.scss';

const IconButton = ({iconSize = "4rem", labelSize="1.4rem", icon, label}) => {
    return (
        <IconContext.Provider value={{ className: "global-class-name" }}>
            <div className='icon-box'>
                <div className='icon' style={{fontSize: iconSize}}>
                    {icon}
                </div>
                <div className='icon-label' style={{fontSize: labelSize}}>{label}</div>
            </div>
        </IconContext.Provider> 
    )
}

export default IconButton;