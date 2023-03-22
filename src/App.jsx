import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav'
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
//import Testmonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
//import Chatbot from './components/ChatBot/Chatbot';

const App = () => {
  return (
    <div>
        <Header> Header</Header>
        <Nav>nav</Nav>
        <About>about</About>
        <Experience>experience</Experience>
        <Services>services</Services>
        <Portfolio></Portfolio>
        <Contact>contact</Contact>
        <Footer></Footer>
    </div>
  )
}

export default App 
