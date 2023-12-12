import React from "react";
import "../style.css";

function Payslip() {
  const DemoBox = (props) => (
    <div className="boxes">
      <p className={`height-${props.value}`}>{props.children}</p>
    </div>
  );

  return (
    <>
      <h4>Payslip</h4>
      <div className="payslipContent">
        <div className="earnings">
          <DemoBox value={120}>Earnings</DemoBox>
        </div>

        <div className="deductions">
          <DemoBox value={120}>Deductions</DemoBox>
        </div>
        <div>
          <h5>Employee Details</h5>
        </div>
      </div>
    </>
  );
}

export default Payslip;
