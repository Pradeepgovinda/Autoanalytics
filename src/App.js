import React from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from './pages/navbar';



function App() {



  return (
    <div>
      <Routes>
      <Route path="/" element={<Layout />}>
          
      </Route>
      </Routes>

    </div>
  );
}
export default App;