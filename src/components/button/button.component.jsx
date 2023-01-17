import './button.styles.scss';

const Button = ({ buttonText, href="" }) => {
    return (
        <>
            {href ?
                (<a href={href} target="_blank" rel="noreferrer">
                    <button className="button">
                        {buttonText}
                    </button>
                </a>)
                :
                (<button className="button">
                    {buttonText}
                </button>)
            }
        </>
    );
}

export default Button;