import React, { useState } from "react";
import Login from "./Login";
import { Alert } from "react-bootstrap";

function Singup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  const [info, setInfo] = useState(true);

  const infoClick = () => {
    setInfo(!info);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !phone) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("AbhiSubmissionEmail", JSON.stringify(email));
      localStorage.setItem("AbhiSubmissionPassword", JSON.stringify(password));
      console.log(email, password);

      setLogin(!login);
    }
  };

  const handleClick = () => {
    setLogin(!login);
  };

  return (
    <>
      {login ? (
        <form onSubmit={handleFormSubmit}>
          <h3>Register</h3>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Full Name"
              name="name"
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Phone No.</label>
            <input
              type="Phone"
              className="form-control"
              placeholder="Enter contact no"
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Register
          </button>
          <p className="forgot-password text-right">
            Already registered{" "}
            <a href="#" onClick={handleClick}>
              log in?
            </a>
          </p>
          {flag && (
            <Alert color="primary" variant="danger">
              I got it you are in hurry! But every Field is important!
            </Alert>
          )}
        </form>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Singup;
