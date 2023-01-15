import IconButton from '../icon-button/icon-button.component';
import SkillIcon from '../skill-icon/skill-icon.components';

import { ImGithub } from "react-icons/im";
import { FaLinkedin, FaJs, FaHtml5, FaCss3Alt, FaReact, FaSass, } from "react-icons/fa";
import { TbMail } from "react-icons/tb";

import './footer.styles.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__content-box'>
                <div className='footer__text'>
                    <h2 className='footer__text-title'>Breno Perricone</h2>
                    <p>© 2023 | Built and designed by Breno Perricone</p>
                </div>
                <div className='footer__info'>
                    <h2 className='footer__info-title'>Website built with</h2>
                    <div className='footer__info-icons'>
                        <SkillIcon icon={ <FaJs /> } title={"Javascript"} iconSize={"2.5rem"} />
                        <SkillIcon icon={ <FaHtml5 /> } title={"HTML5"} iconSize={"2.5rem"} />
                        <SkillIcon icon={ <FaCss3Alt /> } title={"CSS3"} iconSize={"2.5rem"} />
                        <SkillIcon icon={ <FaReact /> } title={"React.js"} iconSize={"2.5rem"} />
                        <SkillIcon icon={ <FaSass /> } title={"Sass"} iconSize={"2.5rem"} />
                    </div>
                </div>
                <div className='footer__contact'>
                    <h2 className='footer__contact-title'>Get in touch</h2>
                    <div className='footer__icons'>
                        <IconButton icon={<ImGithub />} label={"Github"} iconSize={"2.5rem"} labelSize={"1.2rem"} />
                        <IconButton icon={<FaLinkedin />} label={"LinkedIn"} iconSize={"2.5rem"} labelSize={"1.2rem"} />
                        <IconButton icon={<TbMail />} label={"Contact"} iconSize={"2.5rem"}  labelSize={"1.2rem"} />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;