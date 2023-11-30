import React, { useState } from "react";
import { Button, Radio, Tabs } from "antd";
import "../style.css";
function Leaveapply() {
  const items = [
    {
      label: `Leave`,
      key: 1,
      // disabled: i === 28,
      children: "Applying for Leave",
    },
    {
      label: `Restricted Holidays`,
      key: 2,
      // disabled: i === 28,
      children: "Applying for Restricted Holidays",
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
  const [size, setSize] = useState("apply");
  console.log("size", size);
  return (
    <div>
      Leaveapply
      <Tabs
        defaultActiveKey="1"
        tabPosition={"left"}
        style={{
          height: 500,
        }}
        items={items}
      />
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
    </div>
  );
}

export default Leaveapply;
