import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

const Signup = () => {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
     
      let response = await axios.post(
        "http://localhost:5000/user/signup",
        values
      );
      console.log(response.data);
      navigate("/");
    },
  });
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <i className="fa-solid fa-building-columns"></i>
          <h2>Welcome to Free Bank</h2>
          <p>Please enter your credentials to signup</p>
        </div>

        <div className="login-form">
          <div className="form-group">
            <label htmlFor="email">Full Name</label>
            <input
              type="text"
              name="name"
              //   value={formData.email}
              //   onChange={(e)=>setemail(e.target.value)}
              onChange={formik.handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              //   value={formData.email}
              //   onChange={(e)=>setemail(e.target.value)}
              onChange={formik.handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              //   value={formData.password}
              //   onChange={handleInputChange}
              onChange={formik.handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="login-button"
            onClick={formik.handleSubmit}
          >
            Signup
          </button>
        </div>
        <div className="login-footer">
          <p>
            Already have an account? <Link to={"/"}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
