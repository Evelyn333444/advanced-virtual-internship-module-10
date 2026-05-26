import React, { useState } from 'react';

const Search = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault(); // Prevents the default form submission
        onSearch(searchTerm); // Calls the parent component's search function
    };


  return (
    <div className="search__background">
        <div className="search__wrapper">
            <figure>
                <img src="logo" alt=""/>
                </figure>
                <div className="search__content">
                    <div className="search">
                        <div className="search__input--wrapper">
                            <form onSubmit={handleSearch}>
                            <input className="search__input" 
                            placeholder="Search for books" 
                            type="text" 
                            onChange={(event) => setSearchTerm(event.target.value)}
                            value={searchTerm} />
                            </form>
                            <div className="search__icon">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 47１．８　６３６　４１２ｓ－２３．３　１１６．１－６５．６　１５８．４z"></path>
                            </svg>
                            </div>
                            </div>
                            </div>
                            
                                </div>
                                </div>
                                </div>
  );
};

export default Search;