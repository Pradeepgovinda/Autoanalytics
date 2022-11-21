// import React, {useState} from "react";

function Login() {

  //     let [authMode, setAuthMode] = useState("signin")

  //   const changeAuthMode = () => {
  //     setAuthMode(authMode === "signin" ? "signup" : "signin")
  //   }
  return (
    <>

      <div className="container-fluid text-center autoanalytics">
        <div className="row justify-content-md-center">
          <div className="col col-lg-2">
            <div className="auto">
              <img src="../images/smartcarLogo.png" title="autoanalytics" alt="autoanalytics" className="img-fluid" />
              <div className="login">
                <a href='http://localhost:3000/signin'>
                  <button>LOGIN</button>
                </a>
              </div>
              <div className="account mt-2">
                No account?{" "}
                <span className="link-primary">
                  <a href="signup"> Sign Up</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );

}
export default Login;