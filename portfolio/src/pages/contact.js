import React from 'react';
import { useState } from 'react';
import {checkPassword, validateEmail } from '../util/helper';

function Contact() {
    const inputStyle = {
        backgroundColor: "white"
    };

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const {target} = e;
        const inputType = target.name;
        const inputValue = target.value;

        if(inputType === 'email'){
            setEmail(inputValue);
        }else if(inputType === 'name'){
            setName(inputValue);
        }else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(!validateEmail(email) || !name){
            setErrorMessage('Email or username is invalid');
            return;
        }
        if(!checkPassword(message)){
            setErrorMessage(`Choose different message`);
            return;
        }

        setName('');
        setMessage('');
        setEmail('');
    };

    return (
        <div>
            <form className='form'>
                <input style={inputStyle} value={name} onChange={handleInputChange} type="text" />
                <input style={inputStyle} value={email} name="email" onChange={handleInputChange} type="email" />
                <textarea style={inputStyle} value={message} name="message" onChange={handleInputChange} type="text" />
                <button type="button" style={inputStyle} onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className='error-text'>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Contact;