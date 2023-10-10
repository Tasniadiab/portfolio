import React from 'react';
import { Container } from '@mui/material';
import './Resume.scss';
import Frame from '../../assets/skills_frames.svg';
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

const Resume = () =>{
    const responsive = {
    superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
    },
    desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
    },
    tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
    },
    mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
    }
};

    return(
        <Container>
        <div className='resume_container'>
                <div className='skills'>
        <h1>My skills include ~</h1>
        </div>
        <div className ="skill-frame">
                    <img src={Frame} alt="skill-frame"/>
                    <div className="logo">
                        <div className="logo-slide">
                            <img src={Bootstrap} alt="bootstrap"/>
                            <img src={CSS} alt="css-icon"/>
                            <img src={Django} alt="django"/>
                            <img src={Figma} alt="figma"/>
                            <img src={HTML} alt="html-icon"/>
                            <img src={Python} alt="python"/>
                            <img src={JS} alt="js"/>
                            <img src={ReactIcon} alt="react"/>
                            <img src={Git} alt="git"/>
                            <img src={Gitlab} alt="gitlab"/>
                            <img src={Github} alt="github"/>
                            <img src={Docker} alt="docker"/>
                            <img src={Fastapi} alt="fastapi"/>
                            <img src={Postgres} alt="postgres"/>
                            <img src={Rabbit} alt="rabbit"/>
                            <img src={S3} alt="s3"/>
                            <img src={SQL} alt="sql"/>
                        </div>
                        

                    </div>
                </div>
        </div>
        </Container>
    )
}
export default Resume
