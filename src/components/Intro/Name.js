import React from 'react';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import './Name.scss';
import TasniaPainting from '../../assets/Tasnia_painting.svg';
import Divider from '../../assets/divider.svg';

const Name = () => {
    useEffect(() => {
        // Find the h2 element by its ID
        const h1Element = document.querySelector('#name');
    
        if (h1Element) {
          const textContent = h1Element.textContent;
          if (textContent.length >= 8) {
            // Extract the seventh letter and wrap it in a <span> element with a class
            const seventhLetter = textContent.charAt(7);
            h1Element.innerHTML = textContent.replace(seventhLetter, `<span class="seventh-letter">${seventhLetter}</span>`);
          }
        }
      }, []);
    
    return (
        <Container>
         <div className="container">
            <div className="title" >
                    <h1 id= "name">
                    Tasnia Bhuiyan
                    </h1>
                    <span className='divide'>
                    <img src={Divider} alt="divider" />
                    </span>

                        
        
                    
                    
            </div>
        
            
        </div>
            
        </Container>
    )
}

export default Name