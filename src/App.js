import logo from './logo.svg';
import Border from './assets/Border.svg'
import './App.scss';
import Lenis from '@studio-freight/lenis';
import { Routes, Route } from 'react-router-dom';
import Layout from './components';
import Bio from './components/Intro/Bio';
import Resume from './components/Resume/Resume';
import { Container } from '@mui/material';
import Divider from './assets/Divider2.svg'
import Paper from './assets/paper.svg'



function App() {
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
    console.log({ scroll, limit, velocity, direction, progress })
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  return (
    <>
    <div id="top">
        <div id="top1"><img src={Border} alt='border'/></div>

    </div>
    <div className='card w-100 mt-2'>
      <div className="alternate1">
      <Layout/>
      
      </div>
      <div className='alternate2'>
    <Bio/>
    </div>
    
    <span className='divide2'>
                    <img src={Divider} alt="divider" />
                    </span>
    <div>
      <Resume/>
    </div>
    
    
    </div>
    </>
  )
    
}

export default App;
