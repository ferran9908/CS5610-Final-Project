import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router"
import Home from "./components/HomeScreen/Home";
import TopNav from "./components/Header/TopNav";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <div className="header">
                <TopNav></TopNav>
            </div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
