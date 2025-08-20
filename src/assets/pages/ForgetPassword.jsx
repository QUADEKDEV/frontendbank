import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import './login.css'

const ForgetPassword = () => {
    let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      email: "",
      otp:"",
      newPassword: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      let response = await axios.post(
        "https://backendfreebank.onrender.com/user/changePassword",
        values
      );
      console.log(response.data);
      if(response.data.status==true){
        navigate("/");
      }
      
    },
  });
  return (
    <div>
       <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <i className="fa-solid fa-building-columns"></i>
          <h2>Welcome to Free Bank</h2>
          <p>Please enter your details</p>
        </div>

        <div className="login-form">
          <div className="form-group">
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
            <input
              type="text"
            
              name="otp"
              //   value={formData.email}
              //   onChange={(e)=>setemail(e.target.value)}
              onChange={formik.handleChange}
              placeholder="Enter OTP sent to your mail"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="newPassword"
              //   value={formData.email}
              //   onChange={(e)=>setemail(e.target.value)}
              onChange={formik.handleChange}
              placeholder="Enter new password"
              required
            />
          </div>

          <button
            type="submit"
            className="login-button"
            onClick={formik.handleSubmit}
          >
           Submit
          </button>
        </div>

        
      </div>
    </div>
    </div>
  )
}

export default ForgetPassword
