import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
const name = useSelector((state) => state.user.name);
const accountNumber = useSelector((state) => state.user.accountnumber);
const email = useSelector((state) => state.user.email);
const profileImage=useSelector((state) => state.user.profileImage);
  return (
    <div className="header">
      <div className="search-bar">
        {accountNumber}  ({email})
      </div>
      <div className="user-profile">
        <div className="notification">
          <i className="fas fa-bell"></i>
           
        </div>
        <img src={profileImage} alt="User" />
       
        
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Navbar;
