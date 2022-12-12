import './SearchBar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function SearchBar() {
    const navigateTo = useNavigate()
    const [searchText, setSearchText] = useState('')
    const handleInput = () => {
        navigateTo(`/search/${searchText}`)
    }

    return(
        <div className="wrap">
            <div className="search">
                <div className="centered">
                    <h3 className="heading-main">
                        America's Leading experts in <br/> Real Estate & Development
                    </h3>
                </div>
                <input type="text" className="searchTerm" placeholder="Enter a ZIP code"
                       value={searchText} onChange={(e) => {
                           setSearchText(e.target.value)
                }}></input>

                <button type="submit" className="searchButton" onClick={handleInput}>
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </button>

            </div>
        </div>
    )
}

export default SearchBar;