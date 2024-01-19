import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8081/users/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container vh-100" >
      <div className="row">
        <div className="col-md-6 offset-md-3 border border-dark rounded p-4 mt-2 shadow bg-opacity-0">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card  bg-transparent">
            <div className="card-header">
              Details of user id : {user.id}
              <ul className="list-group list-group-flush ">
                <li className="list-group-item bg-transparent">
                  <b>Name : </b>
                  {user.name}
                </li>
                <li className="list-group-item bg-transparent">
                  <b>UserName : </b>
                  {user.username}
                </li>
                <li className="list-group-item bg-transparent">
                  <b>Password : </b>
                  {user.password.replace(/./g, '*')}
                </li>
                <li className="list-group-item bg-transparent">
                  <b> Email : </b>
                  {user.email}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
