import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router"
import Home from "./components/HomeScreen/Home";
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import TopNav from "./components/Header/TopNav";
import HouseDetails from "./components/House/HouseDetails"

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className="header">
          <TopNav></TopNav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/house-details" element={<HouseDetails/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
