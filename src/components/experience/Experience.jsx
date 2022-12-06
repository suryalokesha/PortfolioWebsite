import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
    <h5>My SKills</h5>  
    <h2>My Experience</h2>
    <div className='container experience_container'>
      <div className='experience_frontend'>
      <h3>Frontend Development</h3>
        <div className='experience_content'>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>HTML/CSS</h4>
            <small className='text-light'>Proficient</small>
            </div>
          </article>
          <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
           <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Proficient</small>
            </div>
          </article>  
          <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
           <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Proficient</small>
            </div>
          </article>  
          <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Proficient</small>
            </div>
          </article>
          <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
           <div>
            <h4>SPFx</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article> 
          <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
            <h4>PowerAutomate</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article> 
        </div>
      </div>
      <div className='experience_backend'>
      <h3>Backend Development</h3>
        <div className='experience_content'>
          <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
           <div>
            <h4>.NET</h4>
            <small className='text-light'>Proficient</small>
            </div>
          </article>
          <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
            <h4>Web Services</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article> 
          <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
            <h4>C#</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article> 
          <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
            <h4>SQL SERVER</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>  
          <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
            <h4>NodeJS</h4>
            <small className='text-light'>Beginner</small>
            </div>
          </article>
          <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
            <h4>Azure</h4>
            <small className='text-light'>Beginner</small>
            </div>
          </article>
        </div>
      </div>  
    </div>  
    
    </section>
  )
}

export default Experience