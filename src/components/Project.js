import React from 'react';
import '../styles/Portfolio.css';
import { Col, Container, Row } from 'reactstrap';
import { motion } from 'framer-motion';

function Project({left,image,title,discription,technologies,projectLink}) {
    return (
        <div className="Project">     
            {
                left ?
                <>
                <Container fluid="sm">

                <Row xs="1" sm="1" md="2">

                    <Col xs="12" md="7">
                        <motion.div  whileHover={{ scale: 1.11 }} whileTap={{scale:1.0}} transition={{ duration: 0.3 }}  className="Porject_Image">
                                <img alt="Project" src={image}   className="Porject_Image"/>
                            </motion.div>
                    
                    </Col>

                    <Col xs="12" md="5" className="OverLap">
                        
                        <div className="Project_title Tex_align_Left my-2" >
                            {title}
                        </div>

                        <motion.div className="Project_disciption left_marginer " whileHover={{ scale: 1.11 }} whileTap={{scale:1.0}} transition={{ duration: 0.3 }}>
                            <p className="Project_disciption_para">
                                {discription}
                            </p>
                        </motion.div>
                        <div className="Project_technologies Tex_align_Left my-3" >
                                {technologies}
                        </div>
                        <div className="Project_Link ml-auto mt-2">
                            <a href={projectLink} rel="noreferrer" target="_blank">Live Demo</a>  
                        </div>
                    
                    </Col>
                </Row>
                <div className="Spacer">

                </div>
                </Container>
 
                </>
                :
                <>
                <Container fluid="sm">
                    
                    <Row xs="1" sm="1" md="2">
    
                        
    
                        <Col xs="12" md="5" className="OverLap">
                            
                            <div className= "Project_title Tex_align_Right my-2">
                                {title}
                            </div>
    
                            <motion.div  whileHover={{ scale: 1.11 }} whileTap={{scale:1.0}} transition={{ duration: 0.3 }}  className="Project_disciption Right_marginer" >
                                <p className="Project_disciption_para">
    
                                {discription}
                                </p>
                            </motion.div>
                            <div className="Project_technologies Tex_align_Right  my-3" >
                                    {technologies}
                            </div>
                            <div className="Project_Link mr-auto  mb-4">
                            <a href={projectLink} rel="noreferrer" target="_blank">Live Demo</a>
                            </div>
                        
                        </Col>
                        <Col xs="12" md="7">
                            <motion.div  whileHover={{ scale: 1.11 }} whileTap={{scale:1.0}} transition={{ duration: 0.3 }}  className="Porject_Image">
                                <img alt="Project" src={image}   className="Porject_Image"/>
                            </motion.div>
                        
                        </Col>
                    </Row>
                    <div className="Spacer">

                    </div>
                </Container>
                </>


            }

            

            
 


        </div>
    )
}

export default Project
