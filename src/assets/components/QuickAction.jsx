import React from "react";

const QuickAction = () => {
  return (
    <div className="quick-actions">
      <div className="action-btn">
        <div className="action-icon">
          <i className="fas fa-money-check-alt"></i>
        </div>
        <div className="action-title">Transfer</div>
      </div>
      <div className="action-btn">
        <div className="action-icon">
          <i className="fas fa-mobile-alt"></i>
        </div>
        <div className="action-title">Pay Bills</div>
      </div>
      <div className="action-btn">
        <div className="action-icon">
          <i className="fas fa-qrcode"></i>
        </div>
        <div className="action-title">Scan & Pay</div>
      </div>
      <div className="action-btn">
        <div className="action-icon">
          <i className="fas fa-piggy-bank"></i>
        </div>
        <div className="action-title">Savings</div>
      </div>
      <div className="action-btn">
        <div className="action-icon">
          <i className="fas fa-hand-holding-usd"></i>
        </div>
        <div className="action-title">Loans</div>
      </div>
    </div>
  );
};

export default QuickAction;
