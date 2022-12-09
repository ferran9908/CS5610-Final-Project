import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router"
import Home from "./components/Home";
import HouseDetails from "./components/HouseDetails"

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/house-details" element={<HouseDetails/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
