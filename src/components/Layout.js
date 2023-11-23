import React, { lazy, useState } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  HomeOutlined,
  InfoOutlined,
  ProfileOutlined,
  MoneyCollectOutlined,
  CarOutlined,
  CalendarOutlined,
  BookOutlined,
  TeamOutlined,
  ToolOutlined,
  InteractionOutlined,
  DownOutlined,
  BellOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Dropdown } from "antd";
import HomeLogo from "../images/dezoito_tech_logo.jpg";
const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    icon: React.createElement(HomeOutlined),
    key: "1",
    label: "Home",
  },
  {
    icon: React.createElement(InfoOutlined),
    key: "2",
    label: "Feeds",
  },
  {
    icon: React.createElement(ProfileOutlined),
    key: "3",
    label: "Todo",
    children: [
      { key: 1, label: "Tasks" },
      { key: 2, label: "Review" },
    ],
  },
  {
    icon: React.createElement(MoneyCollectOutlined),
    key: "4",
    label: "Salary",
    children: [
      { key: 1, label: "Paysilps" },
      { key: 2, label: "YTD Reports" },
      { key: 3, label: "IT Statements" },
      { key: 4, label: "Loans and Advances" },
      { key: 5, label: "Reimbursement" },
      { key: 6, label: "Proof of Investment" },
      { key: 7, label: "Salary Revision" },
    ],
  },
  {
    icon: React.createElement(CarOutlined),
    key: "5",
    label: "Leave",
    children: [
      { key: 1, label: "Leave Apply" },
      { key: 2, label: "Leave Balances" },
      { key: 3, label: "Leave Calendar" },
      { key: 4, label: "Holiday Calendar" },
    ],
  },
  {
    icon: React.createElement(CalendarOutlined),
    key: "6",
    label: "Attendance",
    children: [{ key: 1, label: "Attendance Info" }],
  },
  {
    icon: React.createElement(BookOutlined),
    key: "7",
    label: "Document Center",
  },
  {
    icon: React.createElement(TeamOutlined),
    key: "8",
    label: "People",
  },
  {
    icon: React.createElement(ToolOutlined),
    key: "9",
    label: "Helpdesk",
  },
  {
    icon: React.createElement(InteractionOutlined),
    key: "10",
    label: "Workflow Delegates",
  },
];
const App = () => {
  const [loadings, setLoadings] = useState(false);

  const enterLoading = () => {
    setLoadings(true);
  };
  const quickItems = [
    {
      label: "continue",
      key: "1",
    },
  ];
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          backgroundColor: "#fff",
          alignItems: "center",
          marginTop: 10,
          height: 120,
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            <img src={HomeLogo} alt="logo" srcset="" width={100} height={100} />
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "15%",
              justifyContent: "space-between",
            }}
          >
            <span>
              <Dropdown.Button
                icon={<DownOutlined />}
                loading={loadings}
                menu={{ quickItems }}
                onClick={() => enterLoading()}
              >
                Quick Links
              </Dropdown.Button>
            </span>
            <span>
              <BellOutlined />
            </span>
            <span>
              <PoweroffOutlined />
            </span>
          </div>
        </div>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
              textAlign: "left",
            }}
            width={200}
          >
            <Menu
              mode="inline"
              //   defaultSelectedKeys={["1"]}
              //   defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
              }}
              items={items}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App;
