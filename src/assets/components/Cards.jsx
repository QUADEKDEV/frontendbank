import React from "react";
import { useSelector } from "react-redux";



const Cards = () => {
  const balance = useSelector((state) => state.user.balance);
  return (
    <div className="cards">
      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-title">Total Balance</div>
            <div className="card-value positive">₦{balance.toLocaleString('en-US', { 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
          })}</div>
            <div className="card-change positive">
              <i className="fas fa-arrow-up"> </i> available balance
            </div>
          </div>
          <div className="card-icon blue">
          <i className="fas fa-arrow-down"></i>
          </div>
        </div>
      </div>

      {/* <div className="card">
        <div className="card-header">
          <div>
            <div className="card-title">Monthly Income</div>
            <div className="card-value">₦5,200.00</div>
            <div className="card-change positive">
              <i className="fas fa-arrow-up"></i> 1.1% from last month
            </div>
          </div>
          <div className="card-icon green">
            <i className="fas fa-arrow-down"></i>
          </div>
        </div>
      </div> */}
      {/*
      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-title">Monthly Expenses</div>
            <div className="card-value">₦3,842.00</div>
            <div className="card-change negative">
              <i className="fas fa-arrow-down"></i> 0.8% from last month
            </div>
          </div>
          <div className="card-icon orange">
            <i className="fas fa-arrow-up"></i>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Cards;
