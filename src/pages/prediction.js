import React from "react";
import { useEffect, useState } from "react";



function Prediction() {
  const [autoData, setData] = useState([]);

  const url = "https://powerbi.approcket.in/api/v1";
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYTE2MjNhYzlkMjQzYzU3NmZkYTEwN2UzY2QwZjljZDE0NzE3YTMxZmZmOGEzZmQ4MzBjNDAxMDQ2MjBlODBiMzhlNzg2MmI3OGFlZjI5YTUiLCJpYXQiOjE2NTI3MTYwMTgsIm5iZiI6MTY1MjcxNjAxOCwiZXhwIjoxNjg0MjUyMDE4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.qLYyeIj0MPzfFbmCCcueS5oognVasSxubZazX0svLkXefmxOkY6ybvEE8RWYbPn1w8_1cJin73PBCsj-l3TxDX5hoBm5PyPck53o6Qa9KcQvFwxzzYHkDCZPKof9M3I7Wlu5lwjNrYxKeH97qmWBfX9MiDrWbt3pqYQg45GT2538HbfgJvNEaCS7wpFHTEYSPgyfqa_EQltXz_nPDiIM3c7lw7ykGLYQXirr32dV6COS2aObOAoyeFKBAmJLf8FnhJYEGlLbVm7B5zeezN8tmVtvRWQkFPbogytSDP153ScF3KrZhkFyPA823fopFEjXjMIrhwAjuOMVUpNqQ5J93oIkv_f_pfI2YTSZyeFDdtzgZP0zLRtNuHFYCbmvKAoFZoYckYHl_PwEse8jqvAt14QXea0w0mKKBc8wQfa5iWZdwJMPedTAKIq6YNNJPELE8PLQiC9K5vzP6NNg62S_2jEzeO2iHRMIapqlrUPKqOkxGpGxzHNOta1x0lttOR97b8nIALSO41_D4uTqeVkXMUQGgff-8OdqltM8WI-VcCCo3l5q3Q5jUZs46BAuZnKz5UXm31kGZ79BAnXoT2cxbQFJbyUWtu9wP-o-qkdOlJBPBCT6KF9elI-KKz5N2-ITe-hbbZ-r3NWpBqujWMQWidMeCOwbiMACyRgEwwNL5Kk";
  const fetchData = () => {
    fetch(url + '/report', {
      method: "GET",
      headers: { "Authorization": `Bearer ${token}` }
    }).then(response => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.data);
        console.log(actualData.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);



 
    
    
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
              <input type="text" placeholder="Search"
                
              />
            </div>
          </div>
        </div>
        <hr />
      </main>

      <main className="vehicle-details">
        {autoData.vehicle?.map((item, index) => (
          <div className="container item text-center mt-3" key={index}>
            <div className="container vehicle-list">
              <div className="row">
              {/* onClick={event => handleClick(item)} */}
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
    </>

        
    )
  };
  
  export default Prediction;