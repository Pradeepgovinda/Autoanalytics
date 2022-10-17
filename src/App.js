import React from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './pages/navbar';
// import Main from './pages/main';



function App() {



  return (
    <div>
      <Routes>
      <Route path="/" element={<Navbar />}>
      {/* <Route index element={<Main />} /> */}
      </Route>
      </Routes>

    </div>
  );
}
export default App;