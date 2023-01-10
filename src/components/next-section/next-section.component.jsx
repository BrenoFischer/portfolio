import IconButton from '@mui/material/IconButton';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import './next-section.styles.scss';

const NextSection = ({ title, secondary=false }) => {
    return secondary ? 
    (
        <div className='next-section'>
        <p className='next-section__title-secondary'>{title}</p>
        <IconButton>
            <KeyboardArrowDownIcon sx={{color:'#ff6249', fontSize: 50}}/>
        </IconButton>
      </div>
    )
    : 
    (
        <div className='next-section'>
            <p className='next-section__title'>{title}</p>
            <IconButton>
                <KeyboardArrowDownIcon sx={{color:'white', fontSize: 50}}/>
            </IconButton>
          </div>
    );
}

export default NextSection;