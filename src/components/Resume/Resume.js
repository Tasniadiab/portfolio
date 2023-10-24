import React, { useState, useRef,useEffect }from 'react';
import { Container } from '@mui/material';
import FadeInSection from "./FadeIn";
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Resume.scss';
import Divider from '../../assets/divider.svg';
import FrameTop from '../../assets/skills_frame_top.svg';
import FrameBottom from '../../assets/skills_frame_bottom.svg';
import Bootstrap from '../../assets/skills_logo/bootstrap.png';
import CSS from '../../assets/skills_logo/css-icon.png';
import Django from '../../assets/skills_logo/django.png';
import Figma from '../../assets/skills_logo/figma.png';
import HTML from '../../assets/skills_logo/html-icon.png';
import Docker from '../../assets/skills_logo/docker.png';
import Fastapi from '../../assets/skills_logo/fastapi.png';
import Git from '../../assets/skills_logo/git.png';
import Github from '../../assets/skills_logo/github.png';
import Gitlab from '../../assets/skills_logo/gitlab.png';
import JS from '../../assets/skills_logo/js.png';
import Python from '../../assets/skills_logo/python.png';
import Postgres from '../../assets/skills_logo/PostgreSQL.png';
import Rabbit from '../../assets/skills_logo/rabbitmq.png';
import ReactIcon from '../../assets/skills_logo/react.png';
import S3 from '../../assets/skills_logo/s3.png';
import SQL from '../../assets/skills_logo/sql.png';
import AWS from '../../assets/skills_logo/aws-logo.png';
import Creative from '../../assets/skills_logo/Creative-Cloud.png';
import C from '../../assets/skills_logo/c#.png';

const Resume = () =>{
    // useEffect(() =>{
    //     window.addEventListener('scroll', (event) => {
    //     Aos.init({});
    //     })

    // },[])

    return(
        <Container>
        <div className='skill-container'>
                <div className='section-title' id="skill-section">
        <h1 id='skills-1'>My skills include ~</h1>
        <h2 id="skills-2">These are the tools that I am most familiar
with and build things every day.</h2>
       
        </div>
        <div className ="skill-frame">
                    <div className='skill-top'><img src={FrameTop} alt="skill-frame"/></div>
                    <div className='logo-container'>
                        <div className="logo">
                        <FadeInSection>
                                <img src={Bootstrap} alt="bootstrap"  className="skill-logo"/>
                                <img src={CSS} alt="css-icon"  className="skill-logo"/>
                                <img src={Django} alt="django"  className="skill-logo"/>
                                <img src={Figma} alt="figma"  className="skill-logo"/>
                                <img src={HTML} alt="html-icon"  className="skill-logo"/>
                        </FadeInSection>
                        <FadeInSection>
                                <img src={Python} alt="python"  className="skill-logo"/>
                                <img src={JS} alt="js"  className="skill-logo"/>
                                <img src={ReactIcon} alt="react" className="skill-logo"/>
                                <img src={Git} alt="git"  className="skill-logo"/>
                                <img src={Gitlab} alt="gitlab"  className="skill-logo"/>
                        </FadeInSection>
                        <FadeInSection>
                                <img src={Github} alt="github"  className="skill-logo"/>
                                <img src={Docker} alt="docker"  className="skill-logo"/>
                                <img src={Fastapi} alt="fastapi"  className="skill-logo"/>
                                <img src={Postgres} alt="postgres"  className="skill-logo"/>
                                <img src={Rabbit} alt="rabbit" className="skill-logo"/>
                        </FadeInSection>
                        <FadeInSection>
                                <img src={S3} alt="s3"  className="skill-logo"/>
                                <img src={SQL} alt="sql"  className="skill-logo"/>
                                <img src={AWS} alt="aws"  className="skill-logo"/>
                                <img src={Creative} alt="creative"  className="skill-logo"/>
                                <img src={C} alt="C#"  className="skill-logo"/>
                        </FadeInSection>

                        </div>
                    </div>
                    <div className='skill-bottom'><img src={FrameBottom} alt="skill-frame"/></div>
                </div>
        </div>
        </Container>
    )
}
export default Resume
