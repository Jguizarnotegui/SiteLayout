import React from 'react';
import '../style/components/_footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="info">
                <ul>
                    <li>Company</li>
                    <li>About us</li>
                    <li>Our Services</li>
                    <li>Got arrested?</li>
                </ul>
                <ul>
                    <li>Contact</li>
                    <li><span>legalhelp@gmail.com</span></li>
                    <li>+ 1 800 803 6035</li>
                    <li>
                        <span className="circle"></span>
                        <span className="circle"></span>
                        <span className="circle"></span>
                    </li>
                </ul>
                <ul>
                    <li>Address</li>
                    <li>101 The Real Road</li>
                    <li>Glendale, CA.</li>
                    <li>91204</li>
                </ul>
            </div>
            <div className="copyright">MWDesign 2020. All Rights Reserved</div>
        </footer>
    )
}

export default Footer;