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
      Payslip
      <div className="payslipContent">
        <div className="earnings">
          <DemoBox value={120}>Earnings</DemoBox>
        </div>

        <div className="deductions">
          <DemoBox value={120}>Deductions</DemoBox>
        </div>
        <div>Employee Details</div>
      </div>
    </>
  );
}

export default Payslip;
