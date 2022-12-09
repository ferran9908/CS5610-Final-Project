import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router"
import Home from "./components/Home";
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
