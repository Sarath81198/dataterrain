import React from 'react';
import '../assets/styles/SearchBar.css';
import SearchIcon from '../assets/icons/search.png';

function SearchBar({ width }) {
    return (
        <div className="search-bar-container">
            <input
                type="text"
                placeholder='Search'
                className="search-bar"
                style={{
                    width
                }}
            />
            <img src={SearchIcon} className="search-icon" />
        </div>
    );
}

export default SearchBar;