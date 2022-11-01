import React from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/home';
import Navbar from './pages/navbar';
import Vehicle from './pages/vehicle';
import Forty from './pages/forty';
import Sixty from './pages/sixty';
import Hundred from './pages/hundred';



function App() {



  return (
    <div>
      <Routes>
      <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="21-day-vehicles" element={<Vehicle />} />
      <Route path="40-day-vehicles" element={<Forty />} />
      <Route path="60-day-vehicles" element={<Sixty />} />
      <Route path="100-day-vehicles" element={<Hundred />} />
      </Route>
      </Routes>

    </div>
  );
}
export default App;