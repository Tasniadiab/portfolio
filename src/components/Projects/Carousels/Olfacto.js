import React, { useState, useEffect, useRef } from 'react';
import { Container, Grid } from '@mui/material';
import Arrow from '../../../assets/Arrow.png';

const Olfacto = () => {
    const [olfacto] = useState([
        {
            source: require('../../../assets/progress.png'),
            title: "Olfacto 1"
        }
    ])
    let [index, setIndex] = useState(0);
    let currentOlfacto = olfacto[index]
    const nextOlfacto = () => {
        index !== olfacto.length -1 ? setIndex(index +1) : setIndex(index = 0);
        currentOlfacto = olfacto[index]
    }
    return(
        <>
        <Container>
        <Grid item xs={8} sm={5} id="gallery-wrapper">
                        <div id="gallery-frame">
                            <img src={currentOlfacto.source} alt={currentOlfacto.title} />
                        </div>
                        <div id="gallery-nav-container">
                        <div className="dots-container">
                            {olfacto.map((_, dotIndex)=> (
                                <span key={dotIndex}
                                className={`dot ${dotIndex === index ? 'active' : ''} diamond`}
                                onClick={() => setIndex(dotIndex)}
                                ></span>
                                
                            ))}
                            </div>
                                <button className="arrow" onClick={nextOlfacto}>
                                <img src={Arrow} />
                                </button>
                        
                        </div>
                    </Grid>
                
                
            </Container>
        </>
    );
}

export default Olfacto;