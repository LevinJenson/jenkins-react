import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage';
import LoginPage from './Components/LoginPage'
import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom'
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import AdminHomePage from './Components/AdminHomePage';
import Products from './Components/Products';

import PaymentPage from './Components/PaymentPage';



function App() {
  return (
    <>

      {/* <NavBar/> */}
     
        <Routes>
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/adminHome" element={<AdminHomePage/>} />
          <Route path='/products/:id' element={<Products/>}></Route>
          <Route path='/payment/:price' element={<PaymentPage/>}></Route>
         
        </Routes>
      
     

      {/* <HomePage/> */}

    </>
  );
}

export default App;
