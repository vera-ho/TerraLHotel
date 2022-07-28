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
        <section className="search-container">
            <div className="search-background">
                <section className="search-input-container">
                    <span className="search-greeting">The hotel experts at the MICHELIN Guide</span>
                    <div className="search-input-field">
                        <form onSubmit={handleSearch}>
                            <div className="search-form-fields">
                                <label className="search-input-label">Where to?</label>
                                <input 
                                    type="text"
                                    className="search-input"
                                    placeholder="Destination or Hotel"
                                    value={searchValue}
                                    onChange={ (e) => setSearchValue(e.target.value)}
                                />
                            </div>
                            <div className="search-form-details">
                                <p>Just want to explore hotels? <br/>
                                Browse by your interests, styles, locations and more.</p>
                                <input type="submit" className="search-button" value="Search" />
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Search;