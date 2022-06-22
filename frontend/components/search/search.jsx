import React from "react";
import { Link } from "react-router-dom";

const Search = () => {
    

    return (
        <section className="search-container">
            <div className="search-background">
                <span className="search-greeting">The hotel experts at the MICHELIN Guide</span>
                {/* Put search boxes here */}
                <span className="explore-question">Just want to explore hotels?</span>
                <span className="browse">Browse by your interests, styles, locations and more.</span>
            </div>
        </section>
    );
}

export default Search;