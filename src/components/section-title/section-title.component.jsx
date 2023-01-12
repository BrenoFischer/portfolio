import './section-title.styles.scss';

const SectionTitle = ({title}) => {
    return (
        <div className='section__title-box'>
            <h2 className='section__title'>{title}</h2>
            <div className='section__title-border'></div>
        </div>
    );
}

export default SectionTitle