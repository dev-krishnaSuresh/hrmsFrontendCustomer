import React from "react";
import { Dropdown, Button, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { DatePicker, Space } from "antd";
import "../style.css";

function LeaveApplyTab() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const menu = (
    <Menu>
      <Menu.Item key="1">Casual Leave (CL)</Menu.Item>
      <Menu.Item key="2">Sick Leave (SL)</Menu.Item>
      <Menu.Item key="3">Maternity Leave (ML)</Menu.Item>
    </Menu>
  );
  return (
    <div className="leaveapplycontent">
      <div>
        Leave is earned by the employee and granted by the employer to take time
        off work. The employee is free to avail this leave in accordance with
        the company policy.
      </div>
      <div>Applying For Leave</div>
      <Dropdown className="typeofleave" overlay={menu} placement="topLeft">
        <Button>
          Leave Type <DownOutlined />
        </Button>
      </Dropdown>
      <div className="leaverApplyContentstyle1">
        <div>
          <p>From date</p>
          <DatePicker className="leaveapplycontentdate" onChange={onChange} />
        </div>
        <div>
          <p>Sessions</p>
          <Dropdown className="typeofleave" overlay={menu} placement="topLeft">
            <Button>
              Session 1 <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </div>
      <div className="leaverApplyContentstyle2">
        <div>
          <p>To date</p>
          <DatePicker className="leaveapplycontentdate" onChange={onChange} />
        </div>
        <div>
          <p>Sessions</p>
          <Dropdown className="typeofleave" overlay={menu} placement="topLeft">
            <Button>
              Session 2 <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </div>
      <Button className="applybtn">Apply</Button>
    </div>
  );
}

export default LeaveApplyTab;
