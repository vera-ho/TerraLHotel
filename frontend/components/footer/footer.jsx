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
                <h1>Developer</h1>
                <ul>
                    <li>GitHub</li>
                    <li>LinkedIn</li>
                </ul>
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