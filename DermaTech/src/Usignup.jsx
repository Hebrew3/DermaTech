import React from "react";
import "./App.css";

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Sign Up Form Submitted");
  };

  return (
    <section id="signup">
      <div className="card">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>

          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              required
            />
          </div>

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

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button type="submit" className="btn">Sign Up</button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
