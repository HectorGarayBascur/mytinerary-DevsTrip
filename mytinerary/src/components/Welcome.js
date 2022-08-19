import React from 'react'
import '../styles/Welcome.css'

export default function Welcome() {
  return (
    <div className='Main-Welcome'><h1 className='H1-Welcome'>Welcome to MyTinerary</h1>
      <p className='P-Welcome'>Find your perfect trip, designed by insiders who know and love their cities!</p>
      <button className='Button-Welcome' type="submit">Click here to find your trip !</button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#a2d9ff" fill-opacity="0.25" d="M0,32L20,74.7C40,117,80,203,120,234.7C160,267,200,245,240,250.7C280,256,320,288,360,288C400,288,440,256,480,240C520,224,560,224,600,240C640,256,680,288,720,277.3C760,267,800,213,840,202.7C880,192,920,224,960,208C1000,192,1040,128,1080,90.7C1120,53,1160,43,1200,74.7C1240,107,1280,181,1320,202.7C1360,224,1400,192,1420,176L1440,160L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path>
      </svg>
    </div>
  )
}


