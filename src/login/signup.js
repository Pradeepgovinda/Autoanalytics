import {useState} from "react";
import axios from "axios";
import {Navigate} from 'react-router-dom';


function Signup () {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false);

    const submit = async e => {
        e.preventDefault();

        await axios.post('register', {
            name, email, password
        });

        setNavigate(true);
    }
    if (navigate) {
      return <Navigate to="/signin"/>;
  }

  return (
    <div className="container-fluid text-center">
        <div className="row justify-content-md-center Auth-form">
        <div className="Auth-form-content">
          
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              <a href="signin">Sign In</a>
            </span>
          </div>
          <div className="form-group mt-3">
            
            <input
              type="fullName"
              className="mt-1"
              placeholder=" Enter Your Name"
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            
            <input
              type="email"
              className="mt-1"
              placeholder=" Email Address"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
           
            <input
              type="password"
              className="mt-1"
              placeholder=" Password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-3" href='http://localhost:3000/signin'>
            <button type="submit" onClick={changeAuthMode} onSubmit={submit} >
              Submit
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
};

export default Signup;