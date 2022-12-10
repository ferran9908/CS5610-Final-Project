import bg from "../../imgs/bg.jpeg"
import SearchBar from "../SearchBar/SearchBar";
import './HomeScreen.css'
import AllHouses from "../House/AllHouses.js"
import React from "react"
import { Container } from "react-bootstrap"


function Home() {
    return (
        <div className>
            <img src="https://images.unsplash.com/photo-1632120669818-ed5498030e32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80"
                 className="search-background-img" />
            <div className="centered">
                <h1 className="heading-main">
                    America's Leading experts in <br/> Real Estate & Development
                </h1>
            </div>

            <SearchBar></SearchBar>
            <div>
                <AllHouses />
            </div>
        </div>


    )
}

export default Home;