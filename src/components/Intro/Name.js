import React from 'react';
import { Container } from '@mui/material';
import './Name.scss';
import TasniaPainting from '../../assets/Tasnia_painting.svg';

const Name = () => {
    return (
        <Container>
         <div className="container">
            <div className="title">
                    <h1 id= "name">
                    Tasnia Bhuiyan
                    </h1>
            </div>
            
            </div>
            <div className="first">
                <div className= "about">
                <div>
                <h3 id= "description">
                Welcome! I'm a software engineer who combines technical expertise with a creative mindset. My passion lies in problem-solving, and I thrive on tackling challenges with an artistic flair. Whether it's software development, design, or painting, I'm committed to always prioritizing the user's needs and experience in everything I create.
                </h3>
                </div>
                </div>
                <div className ="painting">
                    <img src={TasniaPainting} alt="developer"/>
                </div>
            </div>
            
        </Container>
    )
}

export default Name