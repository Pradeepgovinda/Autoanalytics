import React from "react";
import { useEffect } from "react";

function Prediction() {
useEffect(() => {
  fetch('https://powerbi.approcket.in/api/v1/report')
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