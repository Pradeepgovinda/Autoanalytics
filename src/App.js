import React from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/home';
import Navbar from './pages/navbar';
import Vehicle from './pages/vehicle';



function App() {



  return (
    <div>
      <Routes>
      <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="21-day-vehicles" element={<Vehicle />} />
      </Route>
      </Routes>

    </div>
  );
}
export default App;