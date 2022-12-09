import TopNav from "./TopNav"
import React from "react";
import './Home.css'

function Home() {
    return(
        <div>
            <TopNav/>
            <div className="listingName">
                Our Best Collection on Sale
            </div>
        </div>
    )
}

export default Home;