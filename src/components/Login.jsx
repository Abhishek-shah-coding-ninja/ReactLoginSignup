import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./Home";

function Login() {
  const [emaillog, setEmaillog] = useState("");
  const [password, setPasswordlog] = useState("");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    let pass = localStorage.getItem("AbhiSubmissionPassword").replace(/"/g, "");
    let mail = localStorage.getItem("AbhiSubmissionEmail").replace(/"/g, "");

    if (!emaillog || !password) {
      setFlag(true);
      console.log("Empty");
    } else if (emaillog === mail || password === pass) {
      setHome(!home);
      setFlag(false);
    }
  };

  return (
    <>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>LogIn</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </>
  );
}

export default Login;
