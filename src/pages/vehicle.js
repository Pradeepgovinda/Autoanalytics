import React from "react";
// import { useState } from "react";
// import Records from './records.json';

function Vehicle() {
    // const [stock] = useState([]);

    const url = "https://powerbi.approcket.in/api/v1";
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYTE2MjNhYzlkMjQzYzU3NmZkYTEwN2UzY2QwZjljZDE0NzE3YTMxZmZmOGEzZmQ4MzBjNDAxMDQ2MjBlODBiMzhlNzg2MmI3OGFlZjI5YTUiLCJpYXQiOjE2NTI3MTYwMTgsIm5iZiI6MTY1MjcxNjAxOCwiZXhwIjoxNjg0MjUyMDE4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.qLYyeIj0MPzfFbmCCcueS5oognVasSxubZazX0svLkXefmxOkY6ybvEE8RWYbPn1w8_1cJin73PBCsj-l3TxDX5hoBm5PyPck53o6Qa9KcQvFwxzzYHkDCZPKof9M3I7Wlu5lwjNrYxKeH97qmWBfX9MiDrWbt3pqYQg45GT2538HbfgJvNEaCS7wpFHTEYSPgyfqa_EQltXz_nPDiIM3c7lw7ykGLYQXirr32dV6COS2aObOAoyeFKBAmJLf8FnhJYEGlLbVm7B5zeezN8tmVtvRWQkFPbogytSDP153ScF3KrZhkFyPA823fopFEjXjMIrhwAjuOMVUpNqQ5J93oIkv_f_pfI2YTSZyeFDdtzgZP0zLRtNuHFYCbmvKAoFZoYckYHl_PwEse8jqvAt14QXea0w0mKKBc8wQfa5iWZdwJMPedTAKIq6YNNJPELE8PLQiC9K5vzP6NNg62S_2jEzeO2iHRMIapqlrUPKqOkxGpGxzHNOta1x0lttOR97b8nIALSO41_D4uTqeVkXMUQGgff-8OdqltM8WI-VcCCo3l5q3Q5jUZs46BAuZnKz5UXm31kGZ79BAnXoT2cxbQFJbyUWtu9wP-o-qkdOlJBPBCT6KF9elI-KKz5N2-ITe-hbbZ-r3NWpBqujWMQWidMeCOwbiMACyRgEwwNL5Kk";
  React.useEffect(() => {
    fetch(url + '/report', {
      method: "GET",
      headers: { "Authorization": `Bearer ${token}` }
    }).then(response => response.json())
      .then(data => console.log(data));
}, []);


// var product = stock.data
// var startDate = "1";
// var endDate = "21";
// var resultProductData = product.filter(
//     function (a)
//     {
//         return (a.age) > startDate && (a.age) < endDate;
//     });
// console.log(resultProductData);
    
    
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
                  <h1 className="vehicle-one">11</h1>
                  <p>Vehicles Analyzed </p>
                </div>

              </div>
            </div>
            <div className="col-sm-4">
              <div className="row vehicle-inventory">
                <div className="col">
                  <h1 className="vehicle-one">21.00</h1>
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
                    <h1 className="circle">A+</h1>

                  </div>

                </div>
              </div>
            </div>
          </div>
          
        </div>
        <hr />
      </main>

      {/* <main className="vehicle-details">
          {stock.map((item) => (
            <div className="container item text-center mt-3" key={item.vin}>
              <div className="container vehicle-list">
                <div className="row">
                  <div className="col-4  vehicle-image">
                    <img src={item.icon} title={item.title} alt= {item.title} className="img-fluid" />
                  </div>
                  <div className="col items">

                  <div className="row">
                  <div className="col">
                  <span className="item-name">Vin: {item.vin} </span>
                      <span className="item-model"><br/> Vehicle: {item.vehicle}<br/>Age: {item.age} </span>
                  </div>
                  <div className="col">
                  <span className="item-sell">Days: {item.views}<br/>  </span>
                      <span className="item-price">Price: {item.price}</span>
                  </div>
                </div>
                  </div>
                </div>
              </div>
  
            </div>
          ))}
        </main> */}
    </>

        
    )
  };
  
  export default Vehicle;