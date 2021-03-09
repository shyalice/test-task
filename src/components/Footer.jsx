import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const Footer = () => (
    <footer className="footer">
        <div className="copyright">
            <span>Company Name &copy; 2021</span>
        </div>
        <div className="social">
            <a href="#instagram"><FontAwesomeIcon icon={['fab', 'instagram']} size="lg" fixedWidth /></a>
            <a href="#facebook"><FontAwesomeIcon icon={['fab', 'facebook']} size="lg" fixedWidth /></a>
            <a href="#google"><FontAwesomeIcon icon={['fab', 'google']} size="lg" fixedWidth /></a>
            <a href="#vk"><FontAwesomeIcon icon={['fab', 'vk']} size="lg" fixedWidth /></a>
        </div>
    </footer>
);

export default Footer;