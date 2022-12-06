import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
    <h5>What I offer</h5>
    <h2>Services</h2>
    <div className='container services_container'>
        <article className='service'>
            <div className='service_head'>
                <h3>UI/UX Design</h3>
            </div>
            <ul className='service_list'>
                <li> 
                    <BiCheck className='service_list-icon'/>
                    <p>Tailoring the User Interface</p>
                </li>
                <li> 
                    <BiCheck className='service_list-icon'/>
                    <p>Cross-platform experiences design</p>
                </li>
                <li> 
                    <BiCheck className='service_list-icon'/>
                    <p>Data visualization for Live Dashboards</p>
                </li>
                <li> 
                    <BiCheck className='service_list-icon'/>
                    <p>Rebranding of SharePoint Websites</p>
                </li>
                <li> 
                    <BiCheck className='service_list-icon'/>
                    <p>Mockups/Prototypes</p>
                </li>
            </ul>
        </article>

        <article className='service'>
            <div className='service_head'>
                <h3>Web Development</h3>
            </div>
            <ul className='service_list'>
                <li> 
                    <BiCheck className='service_list-icon'/>
                    <p>Cross-Platform Web Applications</p>
                </li>
                <li> 
                    <BiCheck className='service_list-icon'/>
                    <p>Commercial Web Applications</p>
                </li>
                <li> 
                    <BiCheck className='service_list-icon'/>
                    <p>Content Management Systems</p>
                </li>
                <li> 
                    <BiCheck className='service_list-icon'/>
                    <p>Document Management Systems</p>
                </li>
                <li> 
                    <BiCheck className='service_list-icon'/>
                    <p>Application Maintenance and Support Services</p>
                </li>
            </ul>
        </article>

        <article className='service'>
            <div className='service_head'>
                <h3>Business Process Automation</h3>
            </div>
            <ul className='service_list'>
                <li> 
                    <BiCheck className='service_list-icon'/>
                    <p>Automation for ETL processes</p>
                </li>
                <li> 
                    <BiCheck className='service_list-icon'/>
                    <p>Reduce manual effort for redundant tasks</p>
                </li>
                <li> 
                    <BiCheck className='service_list-icon'/>
                    <p>Alternative solution to reduce operation costs</p>
                </li>
                <li> 
                    <BiCheck className='service_list-icon'/>
                    <p>Digitalization to eliminate paper-driven processes</p>
                </li>
                <li> 
                    <BiCheck className='service_list-icon'/>
                    <p>Powerful workflow automation</p>
                </li>
            </ul>
        </article>
    </div>

    </section>
  )
}

export default Services