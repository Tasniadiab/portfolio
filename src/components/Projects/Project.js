import React, { useState, useEffect, useRef } from 'react';
import { Container, Grid } from '@mui/material';
import './Project.scss';
import Formula from './Carousels/Formula';
import Sunday from './Carousels/Sunday-Funday';
import Divider from '../../assets/divider.svg';

const Projects = () => {
    return(
        <Container>
             <div className='section_container'>
             <div className='section-title'>
                <h1>Projects</h1>
                <span className='sub-divide'>
                    <img src={Divider} alt="divider" />
                </span>
            </div>
            <div className="project-container"> 
                <div>
                <Formula/>
                </div>
                <div>
                <h2 id='project-name'> Formula One Fan </h2>
                <p id='project-description'> An app made for Formula One fans by a Formula One fan. The app allows users to keep track of their favorite drivers and teams. The Race calendar makes sure fans know when and where the next race is. 
                    <br />
                    It's lights out and away we go!
                </p>
                </div>
            </div>
            <div className='project-container'>
                <div>
                <h2 id='project-name'> Sunday Funday </h2>
                <p id='project-description'>  A party planning app for every special occasion. 
                    <br />
                    This app allows users to plan their next party by making venue suggestions. The user just has to input their party's time, date, general location (e.g., Brooklyn, Paris, Kingston, NY) and a few keywords for the kind of party they are looking forward to (e.g., Drinks, Dinner, Picnic). The app then generates venue and place suggestions. Users can share their party plans with their friends. 
                </p>
                </div>
                <div>
                <Sunday/>
                </div>
            </div>
            </div>
        </Container>
    )
}

export default Projects