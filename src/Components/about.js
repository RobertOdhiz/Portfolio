import React from 'react'
import '../styles/about.css'
import SE from '../assets/se.jpg'
import Arduino from '../assets/arduino.jpg'
import Resume from '../assets/Robert_Odhiambo_Resume.pdf'

function About() {
  return (
    <div className='about'>
        <h2>About Me</h2>
        <div className='about-item'>
            <h3>SoftWare Engineer</h3>
            <div className='concept'>
                <p>
                    I am an Enthusiastic and well trained Software Engineer with Expertise in both backend and frontend technologies.
                    I have been in a position to work as a software Engineer and build working systems in the industry.
                </p>
                <div className='cards'>
                    <img src={SE} alt='' />
                    <span></span>
                </div>
            </div>
        </div>
        <div className='about-item'>
        <h3>Electrical Engineer</h3>
            <div className='concept'>
                <div className='cards'>
                    <img src={Arduino} alt='' />
                    <span></span>
                </div>
                <p>
                    Currently pursuing my Degree in Electrical and Electronics Engineering with the aim of delving deeper into systems design,
                    development and maintenance.
                </p>
            </div>
        </div>
        <a className='button' href={Resume} download>
            <span>Download my CV</span>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
            </svg>
            </span>
        </a>
    </div>
  )
}

export default About