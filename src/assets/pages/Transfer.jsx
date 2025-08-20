import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Formik, useFormik } from "formik";
import axios from "axios";
import { transfer } from "../../redux/appSlice";
import { useSelector, useDispatch } from "react-redux";
import { addaccountresponse,maketransfer,addtransactions} from "../../redux/appSlice";
import { useNavigate } from "react-router-dom";
function Transfer() {
    let token = localStorage.getItem("token");
  let dispatch = useDispatch();
  const balance = useSelector((state) => state.user.balance);
 const accountresponse = useSelector((state) => state.user.accountresponse);
 const id= useSelector((state) => state.user.id);
 let navigate=useNavigate()

  let formik = useFormik({
    initialValues: {
      accountNumber: "",
      description:'',
    },
    onSubmit: async (values) => {
       let transfer={
        accountNumber:formik.values.accountNumber,
        amount:value,
        description:formik.values.description,
        senderId:id,

      };
      let response = await axios.post(
        "http://localhost:5000/user/transfer",transfer,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
      );
      if(response.data.status==true){
        dispatch(maketransfer(value));
        let history = await axios.post("http://localhost:5000/user/history", {id},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
        dispatch(addtransactions(history.data.transaction));
        navigate('/home');
      }
    },
  });
  // const [accountnumber, setaccountnumber] = useState("");
  const [accountName, setaccountName] = useState("");

  useEffect(() => {
    if (formik.values.accountNumber.length > 11) {
      const resolveAccount = async () => {
        let accountNumber = String(formik.values.accountNumber);
        let response = await axios.post(
          "http://localhost:5000/user/resolveaccount",
          { accountNumber },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (response.data.status == true) {
          setaccountName(response.data.name);
        }
        else{
           setaccountName(null);
        }
      };
      resolveAccount();
    } else {
setaccountName(null);
    }
  }, [formik.values.accountNumber]);

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    let val = e.target.value;
    // Allow only numbers and a single decimal
    val = val.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
    setValue(val);
    
    if (val >= balance) {
      dispatch(addaccountresponse(" Insufficient Fund"));
  }else{
    dispatch(addaccountresponse(""));
  }
  };

  
  return (
    <div className="transfer">
      <div className="payment-container">
        <div>Available balance = ₦{balance.toLocaleString('en-US', { 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
          })}</div>
        <input
          type="text"
          onChange={formik.handleChange}
          name="accountNumber"
          placeholder="Recepient Account Number"
        />
        {accountName}
        <input
          type="text"
          value={value}
          onChange={handleChange}
          name="amount"
          placeholder="Input Amount"
        />
        {accountresponse}
        <input type="text"onChange={formik.handleChange}
         name="description" placeholder="Description" />
        <br />
        <button type="submit" onClick={formik.handleSubmit}>Make Payment</button>
        
      </div>
    </div>
  );
}

export default Transfer;
