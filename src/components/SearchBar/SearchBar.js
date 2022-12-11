import './SearchBar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function SearchBar() {
    return(
        <div className="wrap">
            <div className="search">
                <div className="centered">
                    <h3 className="heading-main">
                        America's Leading experts in <br/> Real Estate & Development
                    </h3>
                </div>
                <input type="text" className="searchTerm" placeholder="Enter an address, ZIP code or city"></input>
                {/* link to the seller's page */}
                {/*{this.props.auth && this.props.auth.user && this.props.auth.user.name ?*/}
                {/*    <Link to="/buyerViewListing">*/}
                {/*        <button type="submit" className="searchButton" onClick={()=>this.navigateToBuyer()}>*/}
                <button type="submit" className="searchButton" >
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                            {/*<i className="fa fa-search"></i>*/}
                        </button>
                    {/*<button type="submit" className="searchButton" onClick={()=>this.navigateToBuyer()}>*/}
                    {/*    <button type="submit" className="searchButton" >*/}
                    {/*    <i className="fa fa-search"></i>*/}
                    {/*</button>*/}
                {/*}*/}
            </div>
        </div>
    )
}

export default SearchBar;