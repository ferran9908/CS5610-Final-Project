import bg from "../../imgs/bg.jpeg"
import SearchBar from "../SearchBar/SearchBar";
import './HomeScreen.css'

function Home() {
    return (
        <div>
            <img src={bg} className="search-background-img" alt="logo" />
            <SearchBar></SearchBar>
        </div>
    )
}

export default Home;