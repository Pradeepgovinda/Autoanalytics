import { Outlet } from "react-router-dom";
import React from 'react';

const Layout = () => {
  
  return (
    <>
      <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse">
        <div className="position-sticky">
          <div className="group list-group-flush mx-3 mt-4">
            <a className="navbar-brand" href="carlogo">
              <img src="./images/smartcarLogo.png" alt="Smartcar" />
            </a>
            <li className="list-group-item py-1">
              <a className="nav-link" aria-current="page" href="/home">Home</a>
            </li>
            <li> Filter Vehicles By Age </li>

            <ul id="vehiclesList" className="collapse show group list-group-flush">
              <li className="list-group-item py-1">
                <a href="/21-day-vehicles" className="text-reset">21 Day Vehicles</a>
              </li>
              <li className="list-group-item py-1">
                <a href="40-day-vehicles" className="text-reset">40 Day Vehicles</a>
              </li>
              <li className="list-group-item py-1">
                <a href="60-day-vehicles" className="text-reset">60 Day Vehicles</a>
              </li>
              <li className="list-group-item py-1">
                <a href="100-day-vehicles" className="text-reset">100+ Day Vehicles</a>
              </li>
            </ul>
              <li className="list-group-item py-1">
                <a href="prediction-model" className="nav-link">Go to Prediction Model Overview</a>
              </li>
              <li className="list-group-item py-1">
                <a href="today-vehicles" className="nav-link">Today’s Vehicles Needing Action</a>
              </li>
              <li className="list-group-item py-1">
                <a href="scanner" className="nav-link">VIN Scanner</a>
              </li>
          </div>
        </div>
      </nav>

      <nav id="mainNavbar" className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars"></i>
            </button>
  
          </div>
        </nav>
      
      <Outlet />
    </>
  )
};

export default Layout;