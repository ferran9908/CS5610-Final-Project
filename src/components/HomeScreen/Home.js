// import bg from "../../imgs/bg.jpeg"
import SearchBar from "../SearchBar/SearchBar";
import './HomeScreen.css'
import AllHouses from "../House/AllHouses.js"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import { findAllHouses } from "../../store/slices/houseSlice";
// import { Container } from "react-bootstrap"


function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllHouses())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className>
            <img src="https://images.unsplash.com/photo-1632120669818-ed5498030e32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80"
                className="search-background-img" alt="home" />


            <SearchBar></SearchBar>
            <div>
                <AllHouses />
            </div>
        </div>


    )
}

export default Home;