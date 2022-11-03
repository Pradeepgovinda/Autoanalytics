import React from "react";
import { useState } from "react";
import Records from './records.json';

function Sixty() {
  const [stock] = useState(Records);

var product = stock
var startDate = "41";
var endDate = "60";
var resultProductData = product.filter(
    function (a)
    {
        return (a.age) > startDate && (a.age) < endDate;
    });
console.log(resultProductData);

  return (
    <>
      <main className="sticky">
        <div className="container vehicles"> {/*pt-3 */}
          <div className="row">
            <div className="col-7">
            <div className="row online-vehicle">
            <div className="col-sm-3">
              <div className="row">
                <div className="col">
                  <h1 className="vehicle-one">10</h1>
                  <p>Vehicles Analyzed </p>
                </div>

              </div>
            </div>
            <div className="col-sm-4">
              <div className="row vehicle-inventory">
                <div className="col">
                  <h1 className="vehicle-one">60.00</h1>
                  <p>Average Age</p>
                </div>

              </div>
            </div>
            <div className="stock col">
              <p className="stock-one">Stock</p>
              <input type="text" placeholder="Search" />
            </div>



          </div>

            </div>
            <div className="col">
              <div className="col circle-avg">
                <p>Avg. Performance:</p>
                <div className="row vehicle-inventory">
                  <div className="col">
                    <h1 className="c-circle">C-</h1>

                  </div>

                </div>
              </div>
            </div>
          </div>
          
        </div>
        <hr />
      </main>


      <main className="vehicle-details">
          {resultProductData.map((item) => (
            <div className="container item text-center mt-3" key={item.name}>
              <div className="container vehicle-list">
                <div className="row">
                  <div className="col-4  vehicle-image">
                    <img src={item.icon} title={item.title} alt= {item.title} className="img-fluid" />
                  </div>
                  <div className="col items">

                  <div className="row">
                  <div className="col">
                  <span className="item-name">Vin: {item.name} </span>
                      <span className="item-model"><br/>Name: {item.model}<br/>Stock: {item.code} </span>
                  </div>
                  <div className="col">
                  <span className="item-sell">Days: {item.sell}<br/>  </span>
                      <span className="item-price">Price: {item.price}</span>
                  </div>
                </div>
                  </div>
                </div>
              </div>
  
            </div>
          ))}
        </main>
    </>

  )
};

export default Sixty;