import React from "react";
import { useEffect } from "react";

function Prediction() {
useEffect(() => {
  fetch('https://www.postman.com/collections/d1cf5eefa2ed8a930449')
  .then(res => res.json())
  .then(res => console.log(res)
  )
})

return(
  <div className="app">

  </div>
)

};
export default Prediction;