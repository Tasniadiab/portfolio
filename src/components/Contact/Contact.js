import React, { useState } from 'react';
import './Contact.scss';
import { Container, Grid } from '@mui/material';
import ContactImg from '../../assets/contact.png';


const Contact = () => {
    const formInitialDetails = {
        name: '',
        email: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const onFormUpdate = (category, value) => {
        setFormDetails({
        ...formDetails,
        [category]: value
    })
    }

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.(com|net|org|edu|gov|mil|co\.uk|io|ai|us)$/i;
        return re.test(email);
        };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formDetails.name || !formDetails.email || !formDetails.message) {
        setErrorMessage("All fields must be filled out.");
    } else if (!validateEmail(formDetails.email)) {
        setErrorMessage("Invalid email format.");
    } else {
        setErrorMessage(null);
        setButtonText('Sending...')
        const apiKey = process.env.REACT_APP_FORMSPREE_API_KEY;

        fetch(apiKey, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDetails),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.ok) {
                setFormDetails({
                    name: '',
                    email: '',
                    message: ''
                });
                setButtonText("Send");
                // setStatus({ success: true, message: "Message Sent"});
                setSuccessMessage("Message Sent!!");
            } else {
                setStatus({ success: false, message: "Something went wrong, please try again later." });
            }
            })
            .catch((error) => {
            setErrorMessage("An error occurred.");
            console.error('Error:', error);
            })
            .finally(() => {
                setButtonText('Send');
            })
        }
    };
    return (
        <section className="contact">
            <Container>
                <Grid className="align-items-center">
                    <Grid item md={6} className="contact-form">
                        <Grid item md={6} className="contact-form-1">
                        <img src={ContactImg} alt="contact" id="contactImg"/>
                        <div className='title-form'>
                        <h2>Let's Connect!</h2>
                        <form onSubmit={handleSubmit}>
                                <Grid item sm={6} className="px-1">
                            
                                    <input type="text" value={formDetails.name} placeholder='Name' onChange={(e) => onFormUpdate('name', e.target.value)}/>
        
                                </Grid>
                                <Grid item sm={6} className="px-1">
                                    <input type="text" value={formDetails.email} placeholder='Email' onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                </Grid>
                                <Grid item sm={6} className="px-1">
                                    <textarea type="text" value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)}/>
                                </Grid>
                                <Grid item sm={6} className="px-1">
                                <button type='submit'><span>{buttonText}</span></button>
                                </Grid>
                                <Grid item sm={6} className="px-1">
                                    {status.message &&(
                                    <p className={status.success=== false ? "danger" : "success"}>{status.message}</p>
                                    )}
                                </Grid>
                                <Grid item sm={6} className="px-1">
                                {errorMessage && (
                                    <p className="failed-message">{errorMessage}</p>
                                )}
                                </Grid>
                        </form>
                        </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default Contact