import React from "react";
import { useState } from "react";
import Records from './records.json';

function Vehicle() {
    const [stock] = useState(Records);
    
    return (
    <>  
        <main className="sticky">
          <div className="container vehicles"> {/*pt-4 */}
            <div className="row online-vehicle">
              <div className="col-md-4">
                <div className="row">
                  <div className="col">
                    <h1 className="vehicle-one">11</h1>
                    <p>Vehicles Online </p>
                  </div>
                  
                </div>
              </div>
              <div className="col-md-4">
                <div className="row vehicle-inventory">
                  <div className="col">
                    <h1 className="vehicle-one">210</h1>
                    <p>Vehicles In Inventory</p>
                  </div>
                  
                </div>
              </div>
              <div className="stock col-md-4">
                <p className="stock-one">Stock</p>
                <input type="text" placeholder="Search" />
              </div>
            </div>
            <div className="col-md-4">
                <div className="row vehicle-inventory">
                  <div className="col">
                    <h1 className="circle">A</h1>
                    
                  </div>
                  
                </div>
              </div>
          </div>
          <hr />
        </main>
  
  
        <main className="vehicle-details">
          {stock.map((item) => (
            <div className="container item text-center mt-3" key={item.age}>
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
        </> 
        
    )
  };
  
  export default Vehicle;