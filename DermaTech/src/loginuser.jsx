import React from "react";
import "./App.css"; 

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Form Submitted");
  };

  return (
    <section id="login">
      <div className="card">
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
