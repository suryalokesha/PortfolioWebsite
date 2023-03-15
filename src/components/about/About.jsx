import React from 'react';
import './about.css';
import ME from '../../assets/exppic.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';


const About = () => {
  return (
    <section id='about'>
        <h5>Get to know</h5>
        <h2>About Me</h2>
        <div className='container about_container'>
            <div className='about_me'>
                <div className='about_me-img'>
                    <img src={ME} alt='about me' ></img>
                </div>     
            </div>
            <div className='about_content'>
                <div className='about_cards'>
                    <article className='about_card'>
                        <FaAward className='about_icon' />
                        <h5>Experience</h5>
                        <small>6+ Years</small>
                    </article>
                    <article className='about_card'>
                        <FiUsers className='about_icon' />
                        <h5>Clients</h5>
                        <small>5 across Globe</small>
                    </article>
                    <article className='about_card'>
                        <VscFolderLibrary className='about_icon' />
                        <h5>Projects</h5>
                        <small>19 Completed</small>
                    </article>
                </div>
                <p>
                    I will provide more customizable products and solutions using .NET, and SharePoint technologies.
                </p>
                <a href='#contact' className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About
