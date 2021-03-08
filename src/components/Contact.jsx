import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const Contact = () => (
    <div className="contact">
        <h1>Contact</h1>
        <div className="text-block">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia voluptates sapiente alias mollitia obcaecati dignissimos eveniet, quaerat doloremque! Ex, facere.</p>
            <div className="social">
                <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} size="lg" fixedWidth /></a>
                <a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} size="lg" fixedWidth /></a>
                <a href="#"><FontAwesomeIcon icon={['fab', 'google']} size="lg" fixedWidth /></a>
                <a href="#"><FontAwesomeIcon icon={['fab', 'vk']} size="lg" fixedWidth /></a>
            </div>
        </div>
        
    </div>
);

export default Contact;