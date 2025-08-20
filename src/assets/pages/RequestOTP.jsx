import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import './login.css'

const RequestOTP = () => {
    let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      let response = await axios.post(
        "https://backendfreebank.onrender.com/user/requestotp",
        values
      );
     
      console.log(response.data);
      navigate("/forgetpassword");
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
       
          <button
            type="submit"
            className="login-button"
            onClick={formik.handleSubmit}
          >
           Request OTP
          </button>
        </div>

        
      </div>
    </div>
    </div>
  )
}

export default RequestOTP
