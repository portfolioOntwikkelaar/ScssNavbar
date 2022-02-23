/* eslint-disable no-unused-vars */
import React from 'react'
// import Navbar from './Navbar';
import './styles/limbo.scss'
// import './assets/limbo2.jsx'

const Limbo = () => {
  var revealer = document.querySelector('.revealer');
  
  function move(e) {
    e.preventDefault();
    if (e.clientX || e.touches) {
      let x = (e.clientX || e.touches[0].clientX);
      let y = (e.clientY || e.touches[0].clientY);
      x = Math.max(0, x);
      revealer.style.setProperty('--x', x +'px');
      revealer.style.setProperty('--y', y +'px');
    }
  }
  
  if (window.PointerEvent) {
    document.body.addEventListener('pointermove', move);
  } else {
    document.body.addEventListener('touchmove', move);
    document.body.addEventListener('mousemove', move);
  }
  return (
    <>
   {/* <Navbar /> */}
    <div >
      <div className="hidden"></div>
<div className="noise"></div>
<div className="revealer"></div>
    </div>
    </>
  )
}

export default Limbo
