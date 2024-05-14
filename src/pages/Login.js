import "../login/connexion.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../provider/authProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8082/api/v1/auth/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setToken(data.token); // Assuming the token is returned in the response as 'token'
      navigate("/", { replace: true }); // Navigate to the home page or dashboard after successful login
    } catch (error) {
      console.error("Failed to login:", error);
      // Here, you might want to update your UI to show an error message
    }
  };


  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setToken("this is a test token");
    navigate("/", { replace: true });
  };

  
  return (
    <div className="container my-5">
      <div className="row" style={{ marginTop: "150px" }}>
        <div className="col-md-6 ">
          {/* Divider */}
          <div className="divider-vertical">
            <hr />
          </div>
          {/* Form Fields */}
          <h2 className="text-center mb-4">Connexion</h2>
          <form
            onSubmit={handleSubmit}
            style={{ marginTop: "30px", marginRight: "100px" }}
          >
            <div className="mb-3">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Votre Adresse Mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="input-group-text">
                  <i className="pi pi-envelope"></i>
                </span>
              </div>
            </div>
            <div className="mb-3">
              <div className="input-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="input-group-text">
                  <i className="pi pi-lock"></i>
                </span>
              </div>
            </div>
            <button type="submit" onClick={handleSubmit}  className="btn1 btn btn-primary w-100 mb-3">
              SE CONNECTER
            </button>
          </form>
        </div>
        <div className="col-md-6 btn-left">
          {/* Social Buttons */}
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <button className="btn btn-outline-danger mb-2 w-100">
              <i className="pi pi-google" style={{ marginRight: "10px" }}></i>
              SE CONNECTER AVEC GOOGLE
            </button>
            <button
              className="btn btn-outline-primary w-100"
              style={{ marginTop: "10px" }}
            >
              <i className="pi pi-facebook" style={{ marginRight: "10px" }}></i>
              SE CONNECTER AVEC FACEBOOK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
