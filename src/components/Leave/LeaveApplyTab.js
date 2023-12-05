import React from "react";
import { Dropdown, Button, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

function LeaveApplyTab() {
  const menu = (
    <Menu>
      <Menu.Item key="1">Casual Leave (CL)</Menu.Item>
      <Menu.Item key="2">Sick Leave (SL)</Menu.Item>
      <Menu.Item key="3">Maternity Leave (ML)</Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div>
        Leave is earned by the employee and granted by the employer to take time
        off work. The employee is free to avail this leave in accordance with
        the company policy.
      </div>
      <div>Applying For Leave</div>
      <Dropdown overlay={menu} placement="topLeft">
        <Button>
          Leave Type <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}

export default LeaveApplyTab;
