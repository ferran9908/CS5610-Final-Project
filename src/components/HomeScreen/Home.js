import bg from "../../imgs/bg.jpeg"
import SearchBar from "../SearchBar/SearchBar";
import './HomeScreen.css'
import HouseCard from "../House/HouseCard.js"
import React from "react"
import { Container } from "react-bootstrap"

function Home() {
    return(
            <div>
                <img src={bg} className="search-background-img"/>
                <SearchBar></SearchBar>
                <div>
                    <HouseCard></HouseCard>
                </div>
            </div>
        
    )
}

export default Home;