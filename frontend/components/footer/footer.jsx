import React from "react";

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
                                {/* <img src="icons8-github-50.png"/> */}
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/vh71886/">
                                {/* <img src=""/> */}
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/vh71886/">
                                {/* <img src=""/> */}
                                Angel List
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/vh71886/">
                                {/* <img src=""/> */}
                                Portfolio
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