import Border from './assets/Border.svg'
import { useState, useEffect } from 'react';
import './App.scss';
import Lenis from '@studio-freight/lenis';
import Layout from './components';
import Bio from './components/Intro/Bio';
import Projects from './components/Projects/Project';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Divider from './assets/Divider2.svg';
import Divider2 from './assets/Divider3.svg';





function App() {
  const [layoutMargin, setLayoutMargin] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const top = document.getElementById('top');
      const layoutSection = document.getElementById('layout-section');
      const middleOfTop = top.getBoundingClientRect().height /1;
      setLayoutMargin(middleOfTop * -1);
    };

    handleResize(); // Execute it once after the initial render

    window.addEventListener('resize', handleResize);

    // Check when the relevant image is loaded
    const img = document.getElementById('top-loaded');
    if (img) {
      img.addEventListener('load', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (img) {
        img.removeEventListener('load', handleResize);
      }
    };
  }, []);
  const lenis = new Lenis({
    lerp: 0.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: 'vertical', // vertical, horizontal
    gestureDirection: 'vertical', // vertical, horizontal, both
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
})
window.lenis = lenis;

lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
    
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}


requestAnimationFrame(raf)

  return (
    <>
    
        <div className='plz1'>
          <div id="top">
            <div id="top1">
              <img id="top-loaded" src={Border} alt='border' />
            </div>
          </div>
          <div className='card w-100 mt-2' style={{ marginTop: layoutMargin + 'px' }}>
            <div className="alternate1" >
                <Layout />
                <Bio />
            </div>
          </div>
          <span className='divide2'>
                    <img src={Divider} alt="divider" />
                    </span>
        </div>
    
    <div className='alternate-2'>
      <Projects/>
      <div className='divide3'>
                    <img src={Divider2} alt="divider" />
                    </div>
    </div>
    
    <div>
      <Resume/>
    </div>
    <div className='alternate-3'>
      <Contact/>
      <footer >
      <p>© 2023 Tasnia Bhuiyan</p>
    </footer>
    </div>
    
    
    
    </>
  )
    
}

export default App;
