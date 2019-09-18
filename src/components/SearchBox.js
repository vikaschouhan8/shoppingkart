import React from 'react';
import '../components/searchBox.css'

const SearchBox = () => {
    return (
        <div className="search ml-auto">
            <input type="text" className="searchTerm" placeholder="What are you looking for?" />
            <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
            </button>
        </div>
    );
}

export default SearchBox;