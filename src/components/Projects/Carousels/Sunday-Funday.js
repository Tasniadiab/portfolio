import React, { useState, useEffect, useRef } from 'react';
import { Container, Grid } from '@mui/material';
import Arrow from '../../../assets/Arrow.png';

const Sunday = () => {
    const [sunday] = useState([
        {
            source: require('../../../assets/Sunday1.png'),
            title: "Sunday 1"
        },
        {
            source: require('../../../assets/Sunday2.PNG'),
            title: "Sunday 2"
        },
        {
            source: require('../../../assets/Sunday3.PNG'),
            title: "Sunday 3"
        },
        {
            source: require('../../../assets/Sunday4.png'),
            title: "Sunday 4"
        }
    ])
    let [index, setIndex] = useState(0);
    let currentSunday = sunday[index]
    const nextSunday = () => {
        index !== sunday.length -1 ? setIndex(index +1) : setIndex(index = 0);
        currentSunday = sunday[index]
    }
    return(
        <>
        <Container>
        <Grid item xs={8} sm={5} id="gallery-wrapper">
                        <div id="gallery-frame">
                            <img src={currentSunday.source} alt={currentSunday.title} />
                        </div>
                        <div id="gallery-nav-container">
                        <div className="dots-container">
                            {sunday.map((_, dotIndex)=> (
                                <span key={dotIndex}
                                className={`dot ${dotIndex === index ? 'active' : ''} diamond`}
                                onClick={() => setIndex(dotIndex)}
                                ></span>
                                
                            ))}
                            </div>
                                <button className="arrow" onClick={nextSunday}>
                                <img src={Arrow} />
                                </button>
                        
                        </div>
                    </Grid>
                
                
            </Container>
        </>
    );
}

export default Sunday;