import React from "react";
import { v4 as id } from "uuid";
import TransactionStyle from "./TransactionHistory.module.css";
console.log(TransactionStyle);

function Transaction({ items }) {
  return (
    <table className={TransactionStyle.transactionHistory}>
      <tbody>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
        {items.map(({ type, amount, currency }) => (
          <tr key={id()}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Transaction;
