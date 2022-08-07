
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/HomePage/Home/Home';
import About from './Pages/About/About';import Login from './Pages/Login/Login';
import Banner from './Pages/HomePage/Banner/Banner';
import Appointment from './Pages/HomePage/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyAppointments from './Pages/MyAppointments/MyAppointments';
import Review from './Pages/Review';
import History from './Pages/History/History';
import Users from './Pages/Users';
import Payment from './Pages/DashBoard/Payment';
import RequireAdmin from './Pages/RequireAdmin';
import AddDoctor from './Pages/AddDoctor';


function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/appointment" element={
          <RequireAuth>
          <Appointment />
          </RequireAuth>} />
        
        
        <Route path="/dashboard" element={
          <RequireAuth>
         <DashBoard/>
          </RequireAuth>
        } >
        <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="history" element={<History></History>}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="addDoctor" element={<AddDoctor></AddDoctor>}></Route>
          
        </Route>
        

       <Route path='/banner' element={<Banner/>}></Route>
      </Routes>
      <ToastContainer />
      
    </div>
  );
}

export default App;
