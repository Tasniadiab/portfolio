import React from 'react';
import { Container } from '@mui/material';
import './Bio.scss';
import TasniaPainting from '../../assets/Tasnia_painting.svg';

const Bio = () => {
    return (
        <Container>
         <div className="container">
        
         <div className="first">
                <div className= "description">

                <h2>
                Welcome! 
                </h2>
                <h3>
                I'm a software engineer who combines technical expertise with a creative mindset. My passion lies in problem-solving, and I thrive on tackling challenges with an artistic flair. Whether it's software development, design, or painting, I'm committed to always prioritizing the user's needs and experience in everything I create.
                </h3>
                <div>
                    <h3>Resume   Linkedin   Gitlab</h3>
                </div>
                </div>
                
                <div className ="painting">
                    <img src={TasniaPainting} alt="developer"/>
                </div>
            </div>
            </div>
            
        </Container>
    )
}

export default Bio