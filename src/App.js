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
import Prediction from './pages/prediction';
import HomePage from './login/login';

import Auth from './login/auth';
import Grade from './pages/redirect/grade';


function App() {



  return (
    <div>
      <Routes>
      <Route path="/" exact component = {<HomePage />}/>
      {/* <Route path="/login" exact component= {LoginPage} /> */}
      <Route path="/login" element={<Auth />} />
      <Route  element={<Navbar />}>
      <Route path="/home" element={<Home />} />
      <Route exact path="/vehicle/:id" element={<Grade />} /> 
      <Route path="21-day-vehicles" element={<Vehicle />} />
      <Route path="40-day-vehicles" element={<Forty />} />
      <Route path="60-day-vehicles" element={<Sixty />} />
      <Route path="100-day-vehicles" element={<Hundred />} />
      <Route path="prediction-model" element={<Prediction />} />
      </Route>
      </Routes>

    </div>
  );
}
export default App;

