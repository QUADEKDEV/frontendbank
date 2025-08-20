import React, { useState } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import axios from "axios";
const ProfieUpdate = () => {
  const id = useSelector((state) => state.user.id);
  const [file, setfile] = useState(null);
  let token = localStorage.getItem("token");
  let formik = useFormik({
    initialValues: {
        profileImage:'',
    },
    onSubmit: async (values) => {
      if (file) {
        let response = await axios.post(
          "http://localhost:5000/user/updateprofile/"+id,

         {profileImage: file},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if(response.data.status==true){
        navigate('/home');}
      } else {
      }
    },
  });

  const handleFileChange = (e) => {
    // console.log(e.target.files[0]);
    let image = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      setfile(reader.result);
    };
  };
  return (
    <div className="transfer">
      <div className="payment-container">
        <input
          type="file"
          name="profileImage"
          onChange={(e) => handleFileChange(e)}
        />
        <br />

        <button type="submit" onClick={formik.handleSubmit}>
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default ProfieUpdate;
