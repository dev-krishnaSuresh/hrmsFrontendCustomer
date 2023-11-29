import React, { useState } from "react";
import { Button, Radio, Tabs } from "antd";
import "../style.css";
function Leaveapply() {
  const [size, setSize] = useState("apply");
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
    </div>
  );
}

export default Leaveapply;
