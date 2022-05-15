
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/HomePage/Home/Home';
import About from './Pages/About/About';import Login from './Pages/Login/Login';
import Banner from './Pages/HomePage/Banner/Banner';
;

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path='/banner' element={<Banner/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
