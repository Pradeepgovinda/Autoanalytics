import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {generatePath} from "react-router-dom";

function Hundred() {
  const [data, setData] = useState([]);

  const url = "https://powerbi.approcket.in/api/v1";
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYTE2MjNhYzlkMjQzYzU3NmZkYTEwN2UzY2QwZjljZDE0NzE3YTMxZmZmOGEzZmQ4MzBjNDAxMDQ2MjBlODBiMzhlNzg2MmI3OGFlZjI5YTUiLCJpYXQiOjE2NTI3MTYwMTgsIm5iZiI6MTY1MjcxNjAxOCwiZXhwIjoxNjg0MjUyMDE4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.qLYyeIj0MPzfFbmCCcueS5oognVasSxubZazX0svLkXefmxOkY6ybvEE8RWYbPn1w8_1cJin73PBCsj-l3TxDX5hoBm5PyPck53o6Qa9KcQvFwxzzYHkDCZPKof9M3I7Wlu5lwjNrYxKeH97qmWBfX9MiDrWbt3pqYQg45GT2538HbfgJvNEaCS7wpFHTEYSPgyfqa_EQltXz_nPDiIM3c7lw7ykGLYQXirr32dV6COS2aObOAoyeFKBAmJLf8FnhJYEGlLbVm7B5zeezN8tmVtvRWQkFPbogytSDP153ScF3KrZhkFyPA823fopFEjXjMIrhwAjuOMVUpNqQ5J93oIkv_f_pfI2YTSZyeFDdtzgZP0zLRtNuHFYCbmvKAoFZoYckYHl_PwEse8jqvAt14QXea0w0mKKBc8wQfa5iWZdwJMPedTAKIq6YNNJPELE8PLQiC9K5vzP6NNg62S_2jEzeO2iHRMIapqlrUPKqOkxGpGxzHNOta1x0lttOR97b8nIALSO41_D4uTqeVkXMUQGgff-8OdqltM8WI-VcCCo3l5q3Q5jUZs46BAuZnKz5UXm31kGZ79BAnXoT2cxbQFJbyUWtu9wP-o-qkdOlJBPBCT6KF9elI-KKz5N2-ITe-hbbZ-r3NWpBqujWMQWidMeCOwbiMACyRgEwwNL5Kk";
  const fetchData = () => {
    fetch(url + '/report', {
      method: "GET",
      headers: { "Authorization": `Bearer ${token}` }
    }).then(response => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.data.vehicle);
        console.log(actualData.data.vehicle);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);



  var product = data
var startDate = "0";
var endDate = "100";
var resultProductData = product.filter(
    function (a)
    {
        return (a.age) > startDate && (a.age) > endDate;
    });
console.log(resultProductData);



  const [id, setId] = useState();
  const history = useNavigate();

  const handleProceed = (e) => {
    id && history.push(generatePath("/vehicle/:id", { id }));
  };

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
                  <h1 className="vehicle-one">15</h1>
                  <p>Vehicles Analyzed</p>
                </div>

              </div>
            </div>
            <div className="col-sm-4">
              <div className="row vehicle-inventory">
                <div className="col">
                  <h1 className="vehicle-one">100.00+</h1>
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
                    <h1 className="circle">B</h1>

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
          <div className="container item text-center mt-3" key={item.vin}>
            <div className="container vehicle-list" 
            onClick={(e) => {
              setId(data.vin);
            }}>
              <div className="row">
              {/* onClick={event => handleClick(item)} */}
                <div className="col-4  vehicle-image">
                  {/* <img src={item.vin} title={item.saves} alt= {item.vehicle} className="img-fluid" /> */}
                </div>
                <div className="col items">

                  <div data-id={item.id} className="row">
                    <div className="col">
                    <Link to={`/vehicle/${item.vin}`} onClick={handleProceed}>
                      <span className="item-name">Vin: {item.vin} </span></Link>
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

export default Hundred;