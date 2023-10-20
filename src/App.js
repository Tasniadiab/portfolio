import Border from './assets/Border.svg'
import { useState, useEffect } from 'react';
import './App.scss';
import Lenis from '@studio-freight/lenis';
import Layout from './components';
import Bio from './components/Intro/Bio';
import Projects from './components/Projects/Project';
import Resume from './components/Resume/Resume';
import Divider from './assets/Divider2.svg'





function App() {
  const [layoutMargin, setLayoutMargin] = useState(0);

  const handleResize = () => {
    const top = document.getElementById('top');
    const layoutSection = document.getElementById('layout-section');
    const middleOfTop = top.getBoundingClientRect().height / 1;
    setLayoutMargin(middleOfTop * -1);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const lenis = new Lenis({
    duration: 1.2,
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
              <img src={Border} alt='border' />
            </div>
          </div>
          <div className='card w-100 mt-2'>
            <div className="alternate1" style={{ marginTop: layoutMargin + 'px' }}>
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
      
    </div>
    
    <div>
      <Resume/>
    </div>
    
    
    
    </>
  )
    
}

export default App;
