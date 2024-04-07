import React, { useState, useEffect, useRef } from 'react';
import { Container, Grid } from '@mui/material';
import './Project.scss';
import { Link } from 'react-router-dom';
import Formula from './Carousels/Formula';
import Sunday from './Carousels/Sunday-Funday';
import Olfacto from './Carousels/Olfacto';
import Text from '../../assets/text-background.svg';
import Arrow from '../../assets/Arrow.png';
import Divider from '../../assets/divider.svg';


const Projects = () => {
    return(
        <Container>
             <div className='section_container'>
             <div className='section-title'>
                <h1 id="proj-title">Projects</h1>
                <span className='sub-divide'>
                    <img src={Divider} alt="divider" />
                </span>
            </div>
            <div className="project-container"> 
                <div id='slides'>
                <Formula/>
                </div>
                <div className='project'>
                <h2 id='project-name'> F1 Fan </h2>
                <img id='project-background' src={Text} alt="text" />
                <p id='project-description'> An app made for Formula One fans by a Formula One fan. The app allows users to keep track of their favorite drivers and teams. The Race calendar makes sure fans know when and where the next race is. 
                    <br />
                    It's lights out and away we go!
                    </p>
                    <div className='code-section'>
                    See the code 
                    <Link className='code-link' to='https://github.com/Tasniadiab/formula1' target="_blank" rel="noreferrer noopener">
                        <button className="arrow" id="code-arrow" >
                                <img src={Arrow} />
                                </button>
                                </Link>
                    </div>

                </div>
            </div>
            <div className='project-container'>
            <div className='project'>
                <h2 id='project-name'> Sunday Funday </h2>
                <img id='project-background-2' src={Text} alt="text" />
                <p id='project-description'>  A party planning app for every special occasion. 
                    <br />
                    This app allows users to plan their next party by making venue suggestions. The user just has to input their party's time, date, general location and a few keywords. The app then generates venue and place suggestions.
                </p>
                <div className='code-section'>
                    See the code 
                    <Link className='code-link' to='https://github.com/Tasniadiab/Sunday-funday' target="_blank" rel="noreferrer noopener">
                        <button className="arrow" id="code-arrow" >
                                <img src={Arrow} />
                                </button>
                                </Link>
                    </div>
                </div>
                <div id='slides'>
                <Sunday/>
                </div>
            </div>
            <div className="project-container"> 
                <div id='slides'>
                <Olfacto/>
                </div>
                <div className='project'>
                <h2 id='project-name'> Olfacto </h2>
                <img id='project-background' src={Text} alt="text" />
                <p id='project-description'> A one stop shop for all Fragrance Fans. Discover new perfumes, review scents you've tried and more! 
                    </p>
                    <div className='code-section'>
                    See the code 
                    <Link className='code-link' to='https://github.com/Tasniadiab/olfacto' target="_blank" rel="noreferrer noopener">
                        <button className="arrow" id="code-arrow" >
                                <img src={Arrow} />
                                </button>
                                </Link>
                    </div>

                </div>
            </div>
            </div>
        </Container>
    )
}

export default Projects