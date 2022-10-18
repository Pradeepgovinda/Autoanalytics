import { Outlet } from "react-router-dom";
import React from 'react';
import { useState } from "react";
import Records from './records.json';


const Layout = () => {
  const [stock, setStock] = useState(Records);
    // let btnRef = useRef();
    // const increaseQuantity = index => {
    //     const currentItems = [...stock];
  return (
    <>
      <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse">
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4">
            <a className="navbar-brand" href="#">
              <img src="./images/SmartcarLogo.png" alt="" />
            </a>
            <li className="list-group-item py-1">
              <a className="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <a
              className="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
              data-mdb-toggle="collapse"
              href="#collapseExample1"
              aria-expanded="true"
              aria-controls="collapseExample1"
            >
              <span>Filter Vehicles By Age</span>
            </a>

            <ul id="collapseExample1" className="collapse show list-group list-group-flush">
              <li className="list-group-item py-1">
                <a href="" className="text-reset">21 Day Vehicles</a>
              </li>
              <li className="list-group-item py-1">
                <a href="" className="text-reset">40 Day Vehicles</a>
              </li>
              <li className="list-group-item py-1">
                <a href="" className="text-reset">60 Day Vehicles</a>
              </li>
              <li className="list-group-item py-1">
                <a href="" className="text-reset">100+ Day Vehicles</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light fixed-top">

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
            <i className="fas fa-bars"></i>
          </button>

        </div>
      </nav>


      <main className="sticky">
         <div className="container solid"> {/*pt-4 */}
          <div className="row Vehicles">
            <div className="col-md-4">
              <div className="row">
                <div className="col">
               <h1>158</h1>
                <p>Vehicles Online</p>
                </div>
                <div className="col">
                <h1>32.91</h1>
                <p>Average Online Age</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <div className="row average">
                <div className="col">
                <h1>210</h1>
                <p>Vehicles In Inventory</p>
                </div>
                <div className="col">
                <h1>45.26</h1>
                <p>Average Owned Age</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">Stock</div>
          </div>
        </div>
        <hr/>
      </main>


<main className="bg1">
{/* <div className="container justify-content-center ">
  <div className="row jeep mt-5 mb-5">
    <div className="cost">
    <p>1C4RJFAG6JC272412, 2018 Jeep Grand Cherokee, Liklihood to sell w/in 30 Days: 0.26, Price: $20997 Cost: $18682.6</p>
    </div>
  </div> */}

{stock.map((item) => (
    <div className="container item text-center mt-3" key={item.name}>
        <div className="row jeep mt-5 mb-5">
            <div className="row cost">
                <div className="col-6  img">
                <img src={item.icon} className="img-fluid" />
                </div>
                <div className="col center">
                <p><span className="h1">{item.name} </span>
                  <span className="h2">{item.model} {item.code} </span> 
                  <span className="h3">{item.sell} {item.price}  </span></p>
                </div>
            </div>
        </div>

    </div>
))}
{/* </div> */}
      </main>
      <Outlet />
    </>
  )
};

export default Layout;