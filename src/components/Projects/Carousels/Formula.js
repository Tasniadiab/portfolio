import React, { useState, useEffect, useRef } from 'react';
import { Container, Grid } from '@mui/material';
import Arrow from '../../../assets/Arrow.png';

const Formula = () => {
    const [formula] = useState([
        {
            source: require('../../../assets/formula1.png'),
            title: "Formula 1 Test"
        },
        {
            source: require('../../../assets/formula1.png'),
            title: "Formula 1 Test"
        },
        {
            source: require('../../../assets/formula2.png'),
            title: "Formula 2 Test"
        }
    ]);

    let [index, setIndex] = useState(0);
    let currentformula = formula[index];
    const nextFormula = () => {
        index !== formula.length -1 ? setIndex(index + 1) : setIndex(index = 0);
        currentformula = formula[index];
        console.log(index, currentformula)
    }
    
    return(
        <>
        <Container>
        <Grid item xs={8} sm={5} id="gallery-wrapper">
                        <div id="gallery-frame">
                            <img src={currentformula.source} alt={currentformula.title} />
                        </div>
                        <div id="gallery-nav-container">
                        <div className="dots-container">
                            {formula.map((_, dotIndex)=> (
                                <span key={dotIndex}
                                className={`dot ${dotIndex === index ? 'active' : ''} diamond`}
                                onClick={() => setIndex(dotIndex)}
                                ></span>
                                
                            ))}
                            </div>
                                <button className="arrow" onClick={nextFormula}>
                                <img src={Arrow} />
                                </button>
                        
                        </div>
                    </Grid>
                
                
            </Container>
        </>
    );
};

export default Formula;