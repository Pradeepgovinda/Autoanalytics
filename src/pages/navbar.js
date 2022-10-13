import { Outlet } from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';

const Layout = () => {
  return (
    <>

<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="">Filter Vehicles By Age</a>
        </li>
        <li className="nav-item days">
          <a className="nav-link active" href="/21 Day Vehicles">21 Day Vehicles</a>
        </li>
        <li className="nav-item days">
          <a className="nav-link active" href="/40 Day Vehicles">40 Day Vehicles</a>
        </li>
        <li className="nav-item days">
          <a className="nav-link active" href="/60 Day Vehicles">60 Day Vehicles</a>
        </li>
        <li className="nav-item days">
          <a className="nav-link active" href="/100+ Day Vehicles">100+ Day Vehicles</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
      <Outlet />
    </>
  )
};

export default Layout;