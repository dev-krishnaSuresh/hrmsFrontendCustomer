import React from "react";
import { Collapse } from "antd";
import { Space, Table, Tag } from "antd";
import { DatePicker } from "antd";
import "../style.css";

function LeavePendingTab() {
  const dataSource = [
    {
      key: "1",
      name: "Sick Leave",
      Status: "Pending",
      days: "05",
      from: "10-12-2023",
      to: "15-12-2023",
    },
    {
      key: "2",
      name: "Casual Leave",
      Status: "Pending",
      days: "05",
      from: "10-12-2023",
      to: "15-12-2023",
    },
  ];
  const columns = [
    {
      title: "Type of Leave",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
    },
    {
      title: "From",
      dataIndex: "from",
      key: "from",
    },
    {
      title: "To",
      dataIndex: "to",
      key: "to",
    },
    {
      title: "No of Days",
      dataIndex: "days",
      key: "days",
    },
  ];

  const items = [
    {
      key: "1",
      label: "LeavePending",
      children: <Table dataSource={dataSource} columns={columns} />,
    },
  ];
  const { RangePicker } = DatePicker;
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      {/* <div className="LeavePendingTab"></div> */}
      <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
    </div>
  );
}

export default LeavePendingTab;
