import React from 'react';
import '../styles/Hero.css';

import { FaDev, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


function Hero() {
   
    return (
        <>
       
        <div className="Hero_card_container">
            
            <motion.div animate={{ scale: 0.9 }}
    transition={{ duration: 0.3 }} className="Hero_card">

                <div className="Hero_Img">

                    {/* <img src={profile} alt="profile" /> */}

                </div>

                <div className="Name_Class mb-3">
                    Hello, I'm Artik Bharoliya
                </div>

                <div className="Developer mb-3">
                   <span className="Normal_Font">I'm a&nbsp;&nbsp;</span>Web Developer
                </div>

                <div className="Social_links  mb-4">
                    <div className="socialIcon">
                        <a href="https://www.linkedin.com/in/artik-bharoliya/" rel="noreferrer" target="_blank">
                        <IconContext.Provider value={{ color: "6C63FF",size: '1.4rem' }}>
                            <FaLinkedinIn/>
                        </IconContext.Provider>
                        </a>
                    </div>
                    <div className="socialIcon">
                        <a href="https://github.com/artikbharoliya" rel="noreferrer" target="_blank">
                            <IconContext.Provider value={{ color: "6C63FF",size: '1.4rem' }}>
                            <FaGithub/>
                            </IconContext.Provider>
                        </a>
                    </div>
                    <div className="socialIcon">
                        <a href="https://dev.to/artikbharoliya" rel="noreferrer" target="_blank">
                            <IconContext.Provider value={{ color: "6C63FF",size: '1.4rem' }}>
                            <FaDev/>
                            </IconContext.Provider>
                        </a>
                    </div>
                    <div className="socialIcon">
                        <a href="https://www.facebook.com/artik.bharoliya/" rel="noreferrer" target="_blank">
                            <IconContext.Provider value={{ color: "6C63FF",size: '1.4rem' }}>
                            <FaFacebookF/>
                            </IconContext.Provider>
                        </a>
                    </div>
                    
               
                </div>
                <Row xs="1" md="2" className="Buttons_section ">
                    <Col className="mb-3">
                        <Link to="portfolio"><button className="Hero_button">Portfolio</button></Link>
                    </Col>
                    <Col  className="mb-3">
                        <button className="Hero_button">Contact Me</button>
                    </Col>
                </Row>

            </motion.div>
            
    </div>
        
        </>
    )
}

export default Hero
//https://github.com/artikbharoliya
//https://dev.to/artikbharoliya
//https://www.facebook.com/artik.bharoliya/
//https://www.linkedin.com/in/artik-bharoliya/