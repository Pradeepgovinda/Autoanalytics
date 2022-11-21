import React from "react"
import axios from "axios";
import {Navigate} from "react-router-dom";
import {useState} from "react";

function Signin () {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false);

    const submit = async e => {
        e.preventDefault();

        const {data} = await axios.post('login', {
            email, password
        }, {withCredentials: true});

        axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']}`;

        setNavigate(true);
    }

    if (navigate) {
        return <Navigate to="/"/>;
    }
  

 
    return (
      <div className="container-fluid text-center">
        <div className="row justify-content-md-center Auth-form">
        
          <div className="Auth-form-content">

            <div className="form-group mt-3">
             
              <input
                type="email"
                className=" mt-1"
                placeholder=" Email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
             
              <input
                type="password"
                className=" mt-1"
                placeholder=" Password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <button type="submit" onSubmit={submit}>
                Submit
              </button>
            </div>
            <div className="terms">
            <p className="text-center mt-2">
              Forgot <a href="password">password?</a>
            </p>
            <p>By continuing, you agree to accept our <a href="terms">Terms of Service</a></p>
          </div>
          </div>
          <div>
          <img src="../images/smartcarLogo.png" title="autoanalytics" alt="autoanalytics" className="img-fluid" />
          </div>
        </div>
      </div>
    )
  
};

export default Signin;