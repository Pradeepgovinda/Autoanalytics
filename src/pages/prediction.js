import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import {generatePath} from "react-router-dom";


function Prediction() {
  const [autoData, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const excludeColumns = ["id"];

  const url = "https://powerbi.approcket.in/api/v1";
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYTE2MjNhYzlkMjQzYzU3NmZkYTEwN2UzY2QwZjljZDE0NzE3YTMxZmZmOGEzZmQ4MzBjNDAxMDQ2MjBlODBiMzhlNzg2MmI3OGFlZjI5YTUiLCJpYXQiOjE2NTI3MTYwMTgsIm5iZiI6MTY1MjcxNjAxOCwiZXhwIjoxNjg0MjUyMDE4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.qLYyeIj0MPzfFbmCCcueS5oognVasSxubZazX0svLkXefmxOkY6ybvEE8RWYbPn1w8_1cJin73PBCsj-l3TxDX5hoBm5PyPck53o6Qa9KcQvFwxzzYHkDCZPKof9M3I7Wlu5lwjNrYxKeH97qmWBfX9MiDrWbt3pqYQg45GT2538HbfgJvNEaCS7wpFHTEYSPgyfqa_EQltXz_nPDiIM3c7lw7ykGLYQXirr32dV6COS2aObOAoyeFKBAmJLf8FnhJYEGlLbVm7B5zeezN8tmVtvRWQkFPbogytSDP153ScF3KrZhkFyPA823fopFEjXjMIrhwAjuOMVUpNqQ5J93oIkv_f_pfI2YTSZyeFDdtzgZP0zLRtNuHFYCbmvKAoFZoYckYHl_PwEse8jqvAt14QXea0w0mKKBc8wQfa5iWZdwJMPedTAKIq6YNNJPELE8PLQiC9K5vzP6NNg62S_2jEzeO2iHRMIapqlrUPKqOkxGpGxzHNOta1x0lttOR97b8nIALSO41_D4uTqeVkXMUQGgff-8OdqltM8WI-VcCCo3l5q3Q5jUZs46BAuZnKz5UXm31kGZ79BAnXoT2cxbQFJbyUWtu9wP-o-qkdOlJBPBCT6KF9elI-KKz5N2-ITe-hbbZ-r3NWpBqujWMQWidMeCOwbiMACyRgEwwNL5Kk";
  const fetchData = () => {
    fetch(url + '/twomodelstrack', {
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



  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(autoData);
    else {
      const filteredData = autoData.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };
  

  const [id, setId] = useState();
  const history = useNavigate();

  const handleProceed = (e) => {
    id && history.push(generatePath("/vehicle/:id", { id }));
  };


  return (
    <>

      <main className="sticky">
        <div className="container vehicles"> {/*pt-4 */}
          <div className="row online-vehicle">
            <div className="col-md-4">
              <div className="row">
                <div className="col">
                  <h1 className="vehicle-one">156</h1>
                  <p>Vehicle TTS Predictions </p>
                </div>
                
              </div>
            </div>
            <div className="stock col-md-4">
              <p className="stock-one">Stock</p>
              <input type="text" placeholder="Search"
                value={searchText}
                onChange={(e) => handleChange(e.target.value)}
              />
            </div>
            
          </div>
        </div>
        <hr />
      </main>

      
      <main className="vehicle-details">
        {autoData.map((item) => (
          <div className="container item text-center mt-3" key={item.vin}>
            <div className="container vehicle-list" 
            onClick={(e) => {
              setId(autoData.vin);
            }}>
              <div className="row">
              {/* onClick={event => handleClick(item)} */}     
                <div className="col items">
                  <div data-id={item.id} className="row">
                    <div className="col">
                      <span className="item-model">{item.name} </span>
                      <Link to={`/vehicle/${item.vin}`} onClick={handleProceed}>
                      <span className="item-name"><br/>Vin: {item.vin}</span></Link>
                      <br/><span className="item-date"><br/>Vehicle Online {item.saleprob} Days <br/>Vehicle Predicted to Sell at Day {item.date}</span>
                    </div>
                    <div className="col">
                      <span className="item-name">Stock: {item.stock}<br />  </span>
                      {/* <span className="item-price">Price: {item.price} Cost: {item.cost}</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        ))}
        
        {autoData.length === 0 && <span>No records found to display!</span>}
        
      </main>
      
    </>

  )
};

export default Prediction;