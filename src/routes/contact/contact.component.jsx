import { useState, useRef } from 'react';

import emailjs from '@emailjs/browser';

import SectionTitle from '../../components/section-title/section-title.component';
import Button from '../../components/button/button.component';

import { FiCoffee } from 'react-icons/fi';

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
              setIsLoading(false);
          }, (error) => {
              console.log(error.text);
              setIsLoading(false);
          });
    }

    return (
        <section className='contact-section' id="contact">
            <SectionTitle title={"Contact Me"} />
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
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;