import { IconContext } from 'react-icons';

import './icon-button.styles.scss';

const IconButton = ({iconSize = "4rem", labelSize="1.4rem", url="", icon, label}) => {
    const scrollToContactSection = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } 
      }

    return url ?
    (
        <a href={url} target="_blank" rel="noreferrer">
            <IconContext.Provider value={{ className: "global-class-name" }}>
                <div className='icon-box'>
                    <div className='icon' style={{fontSize: iconSize}}>
                        {icon}
                    </div>
                    <div className='icon-label' style={{fontSize: labelSize}}>{label}</div>
                </div>
            </IconContext.Provider> 
        </a>
    )
    :
    (
        <IconContext.Provider value={{ className: "global-class-name" }}>
            <div className='icon-box' onClick={scrollToContactSection} >
                <div className='icon' style={{fontSize: iconSize}}>
                    {icon}
                </div>
                <div className='icon-label' style={{fontSize: labelSize}}>{label}</div>
            </div>
        </IconContext.Provider> 
    )
}

export default IconButton;