import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import Records from './records.json';

function Home() {
  const [stock] = useState(Records);
    
  const handleClick = (event) => {
    // 👇️ refers to the div element
    console.log(event.currentTarget);

    console.log('div clicked');
  };


  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `newPath`; 
    navigate(path);
  }
   

  return (
    <>

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

      {/* <Link to="/performance-grade"> */}
      <main className="vehicle-details">
        {stock.data.map((item) => (
          <div className="container item text-center mt-3" key={item.id}>
            <div className="container vehicle-list" onClick={routeChange}>
              <div className="row"  onClick={event => handleClick(event)}>
                <div className="col-4  vehicle-image">
                  {/* <img src={item.vin} title={item.saves} alt= {item.vehicle} className="img-fluid" /> */}
                </div>
                <div className="col items">

                  <div data-id={item.id} className="row">
                    <div className="col">
                      <span className="item-name">Vin: {item.vin} </span>
                      <span className="item-model"><br />Vehicle: {item.vehicle}<br />Stock: {item.stock} </span>
                    </div>
                    <div className="col">
                      <span className="item-sell">Age: {item.age}<br />  </span>
                      <span className="item-price">Price: {item.price} Cost: {item.cost}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </main>
      {/* </Link> */}
    </>

  )
};

export default Home;