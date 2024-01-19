import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
  });

  const { name, username,password, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8081/user", user);
    navigate("/");
  };

  return (
    
    <div className="h-75 d-flex justify-content-center align-items-center">
    
      <div className="row h-75 w-100">
        <div className="col-md-6 offset-md-3 border border-dark rounded p-4 mt-2 shadow opacity-5">
          <h2 className="text-center m-4 text-primary fw-bold">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3 text-start text-black">
              <label htmlFor="Name" className="form-label fw-bold">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3 text-start text-black">
              <label htmlFor="Username" className="form-label fw-bold">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3 text-start text-black">
              <label htmlFor="Password" className="form-label fw-bold">
                Password
              </label>
              <input
                type={"password"}
                className="form-control"
                placeholder="Enter your Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3 text-start text-black">
              <label htmlFor="Email" className="form-label fw-bold">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary fw-bold">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2 fw-bold" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
