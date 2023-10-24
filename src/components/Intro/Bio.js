import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGitlab } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Bio.scss';
import TasniaPainting from '../../assets/Tasnia_painting.svg';

const Bio = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random()* 100)
    const titles = [
        "Software Engineer", "Developer", "Back-end", "Front-end", "Designer"
    ]
    const period = 100

    useEffect(() =>{
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => { 
        let i = loopNum % titles.length;
        let allTitles = titles[i];
        let updatedTitle = isDeleting ? allTitles.substring(0, text.length-1) : allTitles.substring(0, text.length+1);

        setText(updatedTitle);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/1)
        }

        if (!isDeleting && updatedTitle === allTitles){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedTitle === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(400);
        }
    };

    return (
        <Container>
         <div className="container">
        
         <div className="first">
                <div className= "description">

                <h2 id="greeting">
                Welcome! 
                </h2>
                <h3 id="desc">
                I'm a software engineer who combines technical expertise with a creative mindset. My passion lies in problem-solving, and I thrive on tackling challenges with an artistic flair. Whether it's software development, design, or painting, I'm committed to always prioritizing the user's needs and experience in everything I create.
                </h3>
                <div className='link-container'>
                    <Link className='link-logo' to='https://www.linkedin.com/in/tasnia-b/' target="_blank" rel="noreferrer noopener">
                     <FontAwesomeIcon icon={faLinkedin} size="xl" style={{color:"#28562a",}}/>
                    </Link>
                    <Link className='link-logo' to='https://docs.google.com/document/d/1thJY8TW6RQXrOb8a486w53wK7D3pck-hzIjlPxOzwqE/edit?usp=sharing' target="_blank" rel="noreferrer noopener">
                     <FontAwesomeIcon icon={faFile} size="xl" style={{color:"#28562a",}}/>
                    </Link>
                    <Link className='link-logo' to='https://github.com/Tasniadiab' target="_blank" rel="noreferrer noopener">
                     <FontAwesomeIcon icon={faGitlab} size="xl" style={{color:"#28562a",}}/>
                    </Link>
                    <Link className='link-logo' to='mailto:tasniadiab@gmail.com' target="_blank" rel="noreferrer noopener">
                     <FontAwesomeIcon icon={faEnvelope} size="xl" style={{color:"#28562a",}}/>
                    </Link>
                    
                </div>
                </div>
                
                <div className ="painting">
                    <div id='words'>
                    <span className="txt-rotate" data-period="2000" data-rotate={JSON.stringify(titles)}><span className="wrap">{text}</span></span>
                    </div>
                    <img src={TasniaPainting} alt="developer"/>
                </div>
            </div>
            </div>
            
        </Container>
    )
}

export default Bio