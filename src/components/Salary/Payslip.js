import React from "react";
import "../style.css";
import Payslipnew from "./Payslipnew";

const earnings = {
  title: "Earnings",
  name: "John Doe",

  headings: [
    { title: "Basic", amount: "10000" },
    { title: "HRA", amount: "9000" },
    { title: "Special Earnings", amount: "11000" },
    { title: "Total Allowance", amount: "12000" },
  ],
};
const deductions = {
  title: "Deductions",
  name: "John Doe",
  id: "123456",
  salary: 5000,
  earnings: 1000,
  deductions: 500,
};
const netsalary = {
  title: "Net Salary",
  name: "John Doe",
  id: "123456",
  salary: 5000,
  earnings: 1000,
  deductions: 500,
};

function Payslip() {
  const DemoBox = (props) => (
    <div className="boxes">
      <p className={`height-${props.value}`}>{props.children}</p>
    </div>
  );

  return (
    <>
      <h3>Payslip</h3>
      {/* <div className="payslipContent">
        <div className="earnings">
          <DemoBox value={120}>Earnings</DemoBox>
        </div>

        <div className="deductions">
          <DemoBox value={120}>Deductions</DemoBox>
        </div>
        <div>
          <h3>Employee Details</h3>
        </div>
      </div> */}
      <div style={{ padding: "20px", display: "flex" }}>
        <Payslipnew employee={earnings} />
        <Payslipnew employee={deductions} />
        <Payslipnew employee={netsalary} />
      </div>
    </>
  );
}

export default Payslip;
