import React from "react";
import { useSelector } from "react-redux";
import { data } from "react-router-dom";

const Transactions = () => {
  const transactions = useSelector((state) => state.user.transactions);

  const id = useSelector((state) => state.user.id);
  const view=(a)=>{

  }

  return (
    <div className="transactions">
      <div className="transactions-header">
        <div className="transactions-title">Recent Transactions</div>

        <a href="#" className="view-all">
          View All
        </a>
      </div>

      <table className="transaction-table">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="transactions">
              <td>{transaction._id}</td>
              <td>
                <div className="transaction-item">
                  <div className="transaction-details">
                  <h4>{transaction.description}</h4></div>
                </div>
              </td>

              <td
                className={
                  transaction.senderId == id
                    ? "transaction-amount negative"
                    : "transaction-amount positive"
                }
              >
                
                ₦
                {transaction.amount.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
                
              </td>
              <td>
                <div className="transaction-item" style={{ fontSize: "15px" }}>
                  <div className="transaction-details">
                  {Date(transaction.created_at)}</div>
                </div>
              </td>
              <td>
                <span
                  className={
                    transaction.status == "Completed"
                      ? "transaction-status status-completed"
                      : "transaction-status status-pending"
                  }
                >
                  {transaction.status}
                </span>
              </td>
              <td> <div class="transaction-icon"><i className="fa-regular fa-eye" onClick={view(index)}></i></div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
