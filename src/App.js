
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/HomePage/Home/Home';
import About from './Pages/About/About';import Login from './Pages/Login/Login';
import Banner from './Pages/HomePage/Banner/Banner';
import Appointment from './Pages/HomePage/Appointment/Appointment';


function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path='/banner' element={<Banner/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
