import React from "react";
import { Collapse } from "antd";
import { Space, Table, Tag } from "antd";
import "../style.css";

function LeaveHistory() {
  const dataSource = [
    {
      key: "1",
      name: "keerthi",
      age: 30,
      address: "10 Kattabomman Street",
    },
    {
      key: "2",
      name: "logu",
      age: 31,
      address: "10 Bazzar Street",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const items = [
    {
      key: "1",
      label: "Suresh",
      children: <Table dataSource={dataSource} columns={columns} />,
    },
    {
      key: "2",
      label: "keerthi",
      children: <Table dataSource={dataSource} columns={columns} />,
    },
    {
      key: "3",
      label: "logu",
      children: <Table dataSource={dataSource} columns={columns} />,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <div className="leavehistory">LeaveHistory</div>
      <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
    </div>
  );
}

export default LeaveHistory;
