import React from "react";
import { BsGithub, BsLinkedin, BsPersonCircle } from 'react-icons/bs';
import { SiAngellist } from 'react-icons/si';

const FooterIndex = (props) => {
    // list technologies
    // developer section with personal links
    // link to original site
    // Section to do copyright/for educational purposes/etc.
    
    return (
        <div className="footer-index-container">
            <section>
                <h1>Technologies Used</h1>
                <ul>
                    <li>React and Redux</li>
                    <li>Ruby on Rails</li>
                    <li>Google Maps API</li>
                    <li>Javascript</li>
                </ul>
            </section>
                
            <section>
                <div>
                    <h1>Developer</h1>
                    <ul>
                        <li>
                            <a href="https://github.com/vh71886/">
                                <BsGithub  className="developer-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/veraho/">
                                <BsLinkedin className="developer-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://angel.co/u/vera-ho-1">
                                <SiAngellist className="developer-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <BsPersonCircle className="developer-icon" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    {/* Project Repository */}
                </div>
            </section>
            
            <section>
                <h1>About</h1>
                <p>Terra l'Hotel is a clone of Tablet Hotels</p>
                <p>Images belong to Tablet Hotels</p>
            </section>
        </div>
    )
}

export default FooterIndex;