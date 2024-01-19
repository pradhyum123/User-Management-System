import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <b>User Management System</b>
          </Link>

          <Link className="btn btn-outline-light" to="/adduser">
            Add User
          </Link>
        </div>
      </nav>
    </div>
  );
}
