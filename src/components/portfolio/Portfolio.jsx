import React from 'react';
import './portfolio.css';
import contactform from '../../assets/HTML5Template.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
          <div className='container portfolio_container'>
            <article className='portfolio_item'>
            <div className='portfolio_item-img'>
              <img src={contactform} ></img> 
            </div>
            <h3>This is a sample Template for website built using HTML/CSS/Bootstrap and it has working contact form</h3>
            <div className='portfolio_item-cta'>
            <a href='https://suryalokesha.github.io/AgencySite/' className='btn btn-primary' target='_blank'>Live</a>
            </div>
            </article>
          </div>
    </section>
  )
}

export default Portfolio