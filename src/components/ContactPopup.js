import React, { useState } from 'react';
import '../styles/Home.css';
import { Tooltip } from 'reactstrap';
import { ImPhone} from 'react-icons/im';
import { IconContext } from 'react-icons/lib';
import { motion } from 'framer-motion';

function ContactPopup() {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    return (<>
        
            <motion.div className="Contact__Popup" id="Tooltip" whileHover={{ scale: 1.2 }} onHoverStart={toggle} whileTap={{scale:1.0}} transition={{ duration: 0.2 }}>
                
                <IconContext.Provider value={{ color: "fff",size: '1rem' }} >
                            <ImPhone/>
                </IconContext.Provider>
            </motion.div>
        
            <Tooltip placement="right" isOpen={tooltipOpen} target="Tooltip" toggle={toggle}>
                Having Trouble with digital Solutions !
                Let's talk...
            </Tooltip>
        </>
    )
}

export default ContactPopup
