import React from "react";
import { Container } from "react-bootstrap";
import "./ExpenseItem.css";

const ExpenseItem = () => {
  return (
    <div>
      <Container>
        <div className="expense_item_wrapper">
          <div className="item_wrapper">
            <p className="item_title font-weight-bold mb-0">Car Insurance</p>
            <p className="item_date text-muted">March 21,2021</p>
          </div>
          <div className="item_price m-0 p-0">$255</div>
        </div>
      </Container>
    </div>
  );
};

export default ExpenseItem;
