import React from "react";
import { BsGithub, BsLinkedin, BsPersonCircle } from 'react-icons/bs';
import { SiAngellist } from 'react-icons/si';
import { FaRegCopyright } from 'react-icons/fa';

const FooterIndex = () => {
    
    return (
        <div className="footer-index-container">
            <section className="footer-technologies-used">
                <h1>Technologies Used</h1>
                <ul className="footer-technologies-list">
                    <li>React and Redux</li>
                    <li>Ruby on Rails</li>
                    <li>Google Maps API</li>
                    <li>Javascript</li>
                </ul>
            </section>
                
            <section className="footer-developer-info-container">
                <div className="footer-developer-info-content">
                    <h1>Developer</h1>
                    <ul className="footer-developer-info-list">
                        <li className="footer-developer-info-list-item">
                            <a href="https://github.com/vh71886/TerraLHotel" target="_blank" rel="noopener noreferrer">
                                <BsGithub  className="developer-icon" />
                            </a>
                        </li>
                        <li className="footer-developer-info-list-item">
                            <a href="https://www.linkedin.com/in/veraho/" target="_blank" rel="noopener noreferrer">
                                <BsLinkedin className="developer-icon" />
                            </a>
                        </li>
                        <li className="footer-developer-info-list-item">
                            <a href="https://angel.co/u/vera-ho-1" target="_blank" rel="noopener noreferrer">
                                <SiAngellist className="developer-icon" />
                            </a>
                        </li>
                        <li className="footer-developer-info-list-item">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <BsPersonCircle className="developer-icon" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-project-repo"></div>
            </section>
            
            <section className="footer-about">
                <h1>About</h1>
                <p>Terra l'Hotel is a clone of&nbsp;
                    <a href="https://www.tablethotels.com/" target="_blank" rel="noopener noreferrer">
                        Tablet Hotels
                    </a>
                </p>
                <p>Images belong to Tablet Hotels</p>
                <p><FaRegCopyright className="copyright-icon"/> &nbsp;Vera Ho</p>
            </section>
        </div>
    )
}

export default FooterIndex;