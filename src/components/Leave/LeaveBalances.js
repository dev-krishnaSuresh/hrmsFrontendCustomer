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
      <h4>LeaveBalances</h4>
      <div className="leavebalances">
        <div className="leaveinfo">
          <DemoBox value={100}>
            <h5>Loss of Pay</h5>
          </DemoBox>
        </div>
        <div className="leaveinfo">
          <DemoBox value={100}>
            <h5>Casual Leave</h5>
          </DemoBox>
        </div>
        <div className="leaveinfo">
          <DemoBox value={100}>
            <h5>Privilege Leave</h5>
          </DemoBox>
        </div>
        <div className="leaveinfo">
          <DemoBox value={100}>
            <h5>Sick Leave</h5>
          </DemoBox>
        </div>
      </div>
    </div>
  );
}

export default LeaveBalances;
