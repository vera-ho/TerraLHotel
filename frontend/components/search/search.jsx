import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = props => {
    const [searchValue, setSearchValue] = useState("");
    const { searchHotels } = props;

    const handleSearch = e => {
        e.preventDefault();
        // debugger
        // props.location.push("hotels");
        searchHotels(searchValue);
        window.location = `/#/hotels`

    }

    return (
        <section className="search-container"> {/* section tag might not be needed */}
            <div className="search-background">
                <section className="search-input-container">
                    <span className="search-greeting">The hotel experts at the MICHELIN Guide</span>
                    <div className="search-input-field">
                        <label className="search-input-label">Where to?</label>
                        <input type="text"
                            className="search-input"
                            placeholder="Destination or Hotel"
                            value={searchValue}
                            onChange={ (e) => setSearchValue(e.target.value)}
                        />
                    </div>
                    
                    <span className="explore-question">Just want to explore hotels?</span>
                    <span className="browse">Browse by your interests, styles, locations and more.</span>

                    {/* <Link to='/hotels' className="search-button" onClick={handleSearch}>Search</Link> */}
                    <p className="search-button" onClick={handleSearch}>Search</p>
                </section>
            </div>
        </section>
    );
}

export default Search;