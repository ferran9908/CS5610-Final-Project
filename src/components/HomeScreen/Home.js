import bg from "../../imgs/bg.jpeg"
import SearchBar from "../SearchBar/SearchBar";
import './HomeScreen.css'
import AllHouses from "../House/AllHouses.js"
import React from "react"
import { Container } from "react-bootstrap"
import AllHouses from "../House/AllHouses";

function Home() {
    return (
        <div>
            <img src={bg} className="search-background-img" />
            <SearchBar></SearchBar>
            <div>

                <AllHouses />
            </div>
        </div>


    )
}

export default Home;