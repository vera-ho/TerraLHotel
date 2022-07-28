import React, { useState } from "react";

const Search = props => {
    const [searchValue, setSearchValue] = useState("");
    const { searchHotels } = props;

    const handleSearch = async e => {
        e.preventDefault();
        await searchHotels(searchValue)
        window.location = "/#/hotels";
    }

    return (
        <section className="search-container"> {/* section tag might not be needed */}
            <div className="search-background">
                <section className="search-input-container">
                    <span className="search-greeting">The hotel experts at the MICHELIN Guide</span>
                    <div className="search-input-field">
                        <label className="search-input-label">Where to?</label>
                        <input 
                            type="text"
                            className="search-input"
                            placeholder="Destination or Hotel"
                            value={searchValue}
                            onChange={ (e) => setSearchValue(e.target.value)}
                        />
                    </div>
                    
                    <span className="explore-question">Just want to explore hotels?</span>
                    <span className="browse">Browse by your interests, styles, locations and more.</span>
                    <p className="search-button" onClick={handleSearch}>Search</p>
                </section>
            </div>
        </section>
    );
}

export default Search;