import { Outlet } from "react-router-dom";
import React from 'react';
import { useState } from "react";
import Records from './records.json';


const Layout = () => {
  const [stock] = useState(Records);
  
  return (
    <>
      <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse">
        <div className="position-sticky">
          <div className="group list-group-flush mx-3 mt-4">
            <a className="navbar-brand" href="carlogo">
              <img src="./images/smartcarLogo.png" alt="Smartcar" />
            </a>
            <li className="list-group-item py-1">
              <a className="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li>
            <a
              className="list-group-item py-2"
              aria-current="true"
              data-mdb-toggle="collapse"
              href="filter-vehicles"
              aria-expanded="true"
              aria-controls="collapsevehicle"
            >
              <span>Filter Vehicles By Age</span>
            </a>
            </li>
            

            <ul id="vehiclesList" className="collapse show group list-group-flush">
              <li className="list-group-item py-1">
                <a href="21-day-vehicles" className="text-reset">21 Day Vehicles</a>
              </li>
              <li className="list-group-item py-1">
                <a href="40-day-vehicles" className="text-reset">40 Day Vehicles</a>
              </li>
              <li className="list-group-item py-1">
                <a href="60-day-vehicles" className="text-reset">60 Day Vehicles</a>
              </li>
              <li className="list-group-item py-1">
                <a href="100+_day-vehicles" className="text-reset">100+ Day Vehicles</a>
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


      <main className="sticky">
        <div className="container vehicles"> {/*pt-4 */}
          <div className="row online-vehicle">
            <div className="col-md-4">
              <div className="row">
                <div className="col">
                  <h1 className="vehicle-one">158</h1>
                  <p>Vehicles Online <span className="percent">+12% </span><span className="mom">MOM </span> </p>
                </div>
                <div className="col">
                  <h1 className="vehicle-one">32.91</h1>
                  <p>Average Online Age <span className="percent">-10%</span><span className="mom">MOM </span> </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row vehicle-inventory">
                <div className="col">
                  <h1 className="vehicle-one">210</h1>
                  <p>Vehicles In Inventory</p>
                </div>
                <div className="col">
                  <h1 className="vehicle-one">45.26</h1>
                  <p>Average Owned Age</p>
                </div>
              </div>
            </div>
            <div className="stock col-md-4">
              <p className="stock-one">Stock</p>
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
        <hr />
      </main>


      <main className="vehicle-details">
        {stock.map((item) => (
          <div className="container item text-center mt-3" key={item.name}>
            <div className="container vehicle-list">
              <div className="row">
                <div className="col-4  vehicle-image">
                  <img src={item.icon} title={item.title} alt= {item.title} className="img-fluid" />
                </div>
                <div className="col items">
                  <p><span className="item-name">{item.name} </span>
                    <span className="item-model">{item.model} {item.code} </span>
                    <span className="item-sell">{item.sell}  </span>
                    <span className="item-price">{item.price}</span></p>
                </div>
              </div>
            </div>

          </div>
        ))}
      </main>
      <Outlet />
    </>
  )
};

export default Layout;