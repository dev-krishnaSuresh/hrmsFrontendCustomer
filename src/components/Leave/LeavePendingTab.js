import React from "react";
import { Collapse } from "antd";
import { Space, Table, Tag } from "antd";
import "../style.css";

function LeavePendingTab() {
  const dataSource = [
    {
      key: "1",
      name: "Sick Leave",
      Status: 31,
      address: "10 Kattabomman Street",
    },
    {
      key: "2",
      name: "Casual Leave",
      Status: 31,
      address: "10 Bazzar Street",
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
      title: "No of Days",
      dataIndex: "address",
      key: "address",
    },
  ];

  const items = [
    {
      key: "1",
      label: "John",
      children: <Table dataSource={dataSource} columns={columns} />,
    },
    {
      key: "2",
      label: "Carter",
      children: <Table dataSource={dataSource} columns={columns} />,
    },
    {
      key: "3",
      label: "Jack",
      children: <Table dataSource={dataSource} columns={columns} />,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <div className="LeavePendingTab">LeavePending</div>
      <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
    </div>
  );
}

export default LeavePendingTab;
