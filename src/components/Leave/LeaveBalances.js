import React from "react";
import "../style.css";
import { Col, Row } from "antd";
function LeaveBalances() {
  const DemoBox = (props) => (
    <div className="boxes">
      <p className={`height-${props.value}`}>{props.children}</p>
    </div>
  );
  return (
    <div>
      LeaveBalances
      <div className="leavebalances">
        <div className="leaveinfo">
          <DemoBox value={100}>Loss of Pay</DemoBox>
        </div>
        <div className="leaveinfo">
          <DemoBox value={100}>Casual Leave</DemoBox>
        </div>
        <div className="leaveinfo">
          <DemoBox value={100}>Privilege Leave</DemoBox>
        </div>
        <div className="leaveinfo">
          <DemoBox value={100}>Sick Leave</DemoBox>
        </div>
      </div>
    </div>
  );
}

export default LeaveBalances;
