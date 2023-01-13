import { useState } from 'react';

import SectionTitle from '../../components/section-title/section-title.component';
import Button from '../../components/button/button.component';

import './contact.styles.scss';

const FormInput = ({label, ...otherProps}) => {
    return (
        <div className='group'>
            <input className='form-input' {...otherProps} />
            {label && (
                <label
                    className={`${
                        otherProps.value.length ? 'shrink' : ''
                    } form-input-label`}
                >
                    {label}
                </label>
            )}
        </div>
    )
}

const defaultFormFields = {
    name: '',
    email: '',
    message: ''
}

const Contact = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { name, email, message } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value});
    }

    return (
        <section className='contact-section'>
            <SectionTitle title={"Contact Me"} />
            <div className='form-box'>
                <form className='form' >
                    <FormInput 
                        label={"Name"}
                        type="text"
                        required 
                        onChange={handleChange} 
                        name="name" 
                        value={name}
                    />

                    <FormInput 
                        label={"E-mail"}
                        type="email"
                        required 
                        onChange={handleChange} 
                        name="email" 
                        value={email}
                    />

                    <FormInput 
                        label={"Message"}
                        type="text"
                        required 
                        onChange={handleChange} 
                        name="message" 
                        value={message}
                    />

                    <Button buttonText={"Submit"}/>
                </form>
            </div>
        </section>
    );
}

export default Contact;