import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
const Login = () => {

  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/login", {  email, password })
      .then((res) => {
        console.log(res);
        if(res.data=== "Success"){
          navigate('/home')
        }

      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
       <Link to="/home">
        <button type="submit" className="btn btn-primary m-3" >
          LOGIN
        </button>
        </Link>
        <Link to ="/">
        <button type="submit" className="btn btn-primary m-3 btn-danger">
          New user 
        </button>
        </Link>
        
      </form>
    </>
  );
};

export default Login;
