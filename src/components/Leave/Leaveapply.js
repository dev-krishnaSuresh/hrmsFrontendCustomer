import React, { useState } from "react";
import { Button, Radio, Tabs } from "antd";
import LeaveApplyTab from "./LeaveApplyTab";
import "../style.css";
import LeavePendingTab from "./LeavePendingTab";
import LeaveHistory from "./LeaveHistory";
import RestrictedHolidaystab from "./RestrictedHolidaystab";
function Leaveapply() {
  const [size, setSize] = useState("apply");

  const items = [
    {
      label: `Leave`,
      key: 1,
      // disabled: i === 28,
      children:
        size == "apply" ? (
          <LeaveApplyTab />
        ) : size == "pending" ? (
          <LeavePendingTab />
        ) : (
          <LeaveHistory />
        ),
    },
    {
      label: `Restricted Holidays`,
      key: 2,
      // disabled: i === 28,
      children: <RestrictedHolidaystab />,
    },
    {
      label: `Leave Cancel`,
      key: 3,
      // disabled: i === 28,
      children: "Applying for Leave Cancel",
    },
    {
      label: "Comp Off Grant",
      key: 4,
      // disabled: i === 28,
      children: "Applying for Comp. Off Grant",
    },
  ];
  console.log("size", size);
  return (
    <div>
      Leaveapply
      <div className="leaveinfo">
        <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
          <Radio.Button
            className={size == "apply" ? "radioActive" : ""}
            value="apply"
          >
            Apply
          </Radio.Button>
          <Radio.Button
            className={size == "pending" ? "radioActive" : ""}
            value="pending"
          >
            Pending
          </Radio.Button>
          <Radio.Button
            className={size == "history" ? "radioActive" : ""}
            value="history"
          >
            History
          </Radio.Button>
        </Radio.Group>
      </div>
      <Tabs
        defaultActiveKey="1"
        tabPosition={"left"}
        style={{
          height: 500,
        }}
        items={items}
      />
    </div>
  );
}

export default Leaveapply;
