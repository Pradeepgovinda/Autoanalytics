import React from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Records from "../records.json"


function Grade() {
  
    const { id } = useParams();
  
    useEffect(() => {
      console.log({ id });
    }, [id]);
  
    

    const [stock] = useState(Records);
    var product = stock
    // var startDate = "0";
    var endDate = "1";
    var resultProductData = product.data.filter(
        function (a) {
            return  (a.age) < endDate;
        });
    // console.log(resultProductData);


    const [isCopied, setIsCopied] = useState(false);
    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
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
                                            <h1 className="vehicle-one">$20,997</h1>
                                            <p>Vehicle Price</p>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="row vehicle-inventory">
                                        <div className="col">
                                            <h1 className="vehicle-one">$18,682</h1>
                                            <p>Vehicle Cost</p>
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
                                <p>Performance Grade:</p>
                                <div className="row vehicle-inventory">
                                    <div className="col">
                                        <h1 className="c-circle">C+</h1>
                                        <p>Predicted to Sell at:</p>
                                        <p>52.17 Days Online</p>
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
                    <div className="container item text-center mt-3" key={item.stock}>
                        <div className="container vehicle-list">
                            <div className="row">
                                <div className="col-4  vehicle-image">
                                    {/* <img src={item.vin} title={item.saves} alt= {item.vehicle} className="img-fluid" /> */}
                                </div>
                                <div className="col items">

                                    <div className="row">
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

                <div className="container">
                    <CopyToClipboard text={resultProductData[0].vin} onCopy={onCopyText}>
                        <div className="copy-area">
                            <div>Copy to Clipboard</div>
                            <span className={`copy-feedback ${isCopied ? "active" : ""}`}>
                                Copied!
                            </span>
                        </div>
                    </CopyToClipboard>
                </div>

            </main>
        </>

    )
};

export default Grade;



