import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const { id, text, amount } = transaction;
  const sign = amount > 0 ? "+" : "-";
  return (
    <div>
      <li className={amount < 0 ? "minus" : "plus"}>
        {text}{" "}
        <span>
          {sign} ${Math.abs(amount)}
        </span>
        <button onClick={() => deleteTransaction(id)} className='delete-btn'>
          x
        </button>
      </li>
    </div>
  );
};

export default Transaction;
