import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="logo">PickBazar</h1>
        <p>Login with your email & password</p>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="customer@demo.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              required
            />
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      
        <p className="register-link">
          Don't have an account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;








