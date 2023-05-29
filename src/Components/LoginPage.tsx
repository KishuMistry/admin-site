import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import ReactDOM from "react-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const doLogin = () => {
    if (userName === "" || password === "") {
      alert("User name and password can not be empty");
      return;
    }
    if (userName === "admin" && password === "admin") {
      localStorage.setItem("userName", userName);
      localStorage.setItem("isAuth", "true");
      navigate("/dashboard");
    } else {
      ReactDOM.render(
        <Alert>Login failed. Please try again...</Alert>,
        document.getElementById("root")
      );
    }
  };

  const resetForm = () => {
    setUserName("");
    setPassword("");
  };
  return (
    <div className="container-fluid">
      <form>
        <div className="mb-3">
          <label id="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label id="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary m-2" onClick={doLogin}>
          Submit
        </button>
        <button type="button" className="btn btn-secondary" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default Login;
