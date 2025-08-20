import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addname,
  addbalance,
  addemail,
  addid,
  addaccount,
  addprofileimage,
  addtransactions,
} from "../../redux/appSlice";

const Login = () => {
  let dispatch = useDispatch();
  const balance = useSelector((state) => state.user.balance);
  const email = useSelector((state) => state.user.email);
  const name = useSelector((state) => state.user.name);
  const id = useSelector((state) => state.user.id);
  const accountnumber = useSelector((state) => state.user.accountnumber);
  const profileimage = useSelector((state) => state.user.profileimage);
  const transactions = useSelector((state) => state.user.transactions);

  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      let response = await axios.post(
        "http://localhost:5000/user/login",
        values
      );
      localStorage.setItem("token", response.data.token);
      if (response.data.status == true) {
        let token = localStorage.getItem("token");
        dispatch(addname(response.data.person.name));
        dispatch(addemail(response.data.person.email));
        dispatch(addbalance(response.data.person.accountBalance));
        dispatch(addid(response.data.person.id));
        dispatch(addaccount(response.data.person.accountNumber));
        dispatch(addprofileimage(response.data.person.profileImage));
        let historyid = response.data.person.id;
        let history = await axios.post("http://localhost:5000/user/history", {id:historyid},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
        dispatch(addtransactions(history.data.transaction));
        navigate("/home");
        // navigate("/home",{ state: response.data});
      } else {
      }
    },
  });

  // const [email, setemail] = useState('')
  // const [password, setpassword] = useState('')
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <i className="fa-solid fa-building-columns"></i>
          <h2>Welcome to Free Bank</h2>
          <p>Please enter your credentials to login</p>
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
              type="password"
              id="password"
              name="password"
              //   value={formData.password}
              //   onChange={handleInputChange}
              onChange={formik.handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-options">
            <Link to={"/requestotp"}>Forgot password?</Link>
          </div>

          <button
            type="submit"
            className="login-button"
            onClick={formik.handleSubmit}
          >
            Login
          </button>
        </div>

        <div className="login-footer">
          <p>
            Don't have an account? <Link to={"/signup"}>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
