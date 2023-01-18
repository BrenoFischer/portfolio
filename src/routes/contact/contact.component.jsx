import { useState, useRef } from 'react';

import emailjs from '@emailjs/browser';

import SectionTitle from '../../components/section-title/section-title.component';
import Button from '../../components/button/button.component';

import { FiCoffee, FiCheckCircle } from 'react-icons/fi';
import { RxCrossCircled, RxCross2 } from 'react-icons/rx';

import './contact.styles.scss';

const FormInput = ({label, textarea, ...otherProps}) => {
    return (
        <div className='group'>
            {textarea ? 
                <textarea className='form-input' {...otherProps}/>
                : 
                <input className='form-input' {...otherProps} />
            }
            {label && (
                <label
                    className={`${
                        otherProps.value.length ? 'shrink' : ''
                    } form-input-label`}
                >
                    {label}<span className='form-input-label-ast'>*</span>
                </label>
            )}
        </div>
    )
}

const LoadingSpinner = () => {
    return (
        <div className="spinner-container">
            <div className="loading-spinner">
            </div>
        </div>
    );
}

const defaultFormFields = {
    name: '',
    email: '',
    message: ''
}

const Contact = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [messageBoxVisible, setMessageBoxVisible] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { name, email, message } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value});
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.sendForm('service_4n0kkhy', 'template_mvaxded', form.current, '4Y4-IJ2hC5NM0ZrdC')
          .then((result) => {
            console.log(result.text);
            setFormFields(defaultFormFields);
            setMessageBoxVisible(true);
            setTimeout(() => setMessageBoxVisible(false), 15000);
            setIsLoading(false);
          }, (error) => {
              console.log(error.text);
              setEmailError(true);
              setMessageBoxVisible(true);
              setTimeout(() => {
                setMessageBoxVisible(false);
                setEmailError(false);
              }, 20000);
              setIsLoading(false);
          });
    }

    const TempMessageBox = () => {
        const handleCloseMessageBox = () => {
            setMessageBoxVisible(false);
        }

        return (
            <div className='message-box'>
                { !emailError ?
                (<>
                    <div className='message-box__exit' onClick={handleCloseMessageBox}>
                        <RxCross2 />
                    </div>
                    <div className='message-box__wrap'>
                        <div className='message-box__icon-box'>
                            <FiCheckCircle />
                        </div>
                        <div className='message-box__text-box'>
                            <h2 className='message-box__title'>E-mail sent with success</h2>
                            <p>Thank you for the message! I'll reply as soon as I can :)</p>
                        </div>
                    </div>
                </>)
                :
                (<>
                    <div className='message-box__exit' onClick={handleCloseMessageBox}>
                        <RxCross2 />
                    </div>
                    <div className='message-box__wrap'>
                        <div className='message-box__icon-box-error'>
                            <RxCrossCircled />
                        </div>
                        <div className='message-box__text-box'>
                            <h2 className='message-box__title-error'>There was an error - e-mail was not sent</h2>
                            <p>Sorry about that! Please, e-mail me manually: breno_perricone@hotmail.com</p>
                        </div>
                    </div>
                </>)
                }

                
            </div>
        );
    }

    return (
        <section className='contact-section' id="contact">
            <div className='contact-section__title-wrapper'>
                <SectionTitle title={"Contact Me"} />
            </div>
            <div className='form-box'>
                <form ref={form} className='form' onSubmit={sendEmail} >
                    <div className='description-form-box'>
                        <div className='description-form-title-box'>
                            <h2 className='description-form-title'>Let's have a chat!</h2>
                            <FiCoffee />
                        </div>
                        <p className='description-form'>Fill in your info in the form below, to get in touch with me directly.</p>
                    </div>
                    <FormInput 
                        textarea={false}
                        label={"Name"}
                        type="text"
                        required 
                        onChange={handleChange} 
                        name="name" 
                        value={name}
                    />

                    <FormInput 
                        textarea={false}
                        label={"E-mail"}
                        type="email"
                        required 
                        onChange={handleChange} 
                        name="email" 
                        value={email}
                    />

                    <FormInput 
                        textarea={true}
                        label={"Message"}
                        rows="4"
                        cols="50"
                        required 
                        onChange={handleChange} 
                        name="message" 
                        value={message}
                    />

                    <div className='form-low-row'>
                        <Button buttonText={"Send message!"}/>
                        {isLoading &&
                            <LoadingSpinner />
                        }
                        {messageBoxVisible && 
                            <TempMessageBox />
                        }
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;