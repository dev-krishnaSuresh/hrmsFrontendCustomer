import React, { lazy, useState, useEffect } from "react";
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
import Home from "./Home";
import Feeds from "./Feeds";
import Todo from "./Todo/Todo";
import Tasks from "./Todo/Tasks";
import Review from "./Todo/Review";
import Salary from "./Salary/Salary";
import Payslip from "./Salary/Payslip";
import YTDReports from "./Salary/YTDReports";
import ITStatements from "./Salary/ITStatements";
import ITDeclaration from "./Salary/ITDeclaration";
import LoansandAdvances from "./Salary/LoansandAdvances";
import Reimbursement from "./Salary/Reimbursement";
import ProofofInvestment from "./Salary/ProofofInvestment";
import SalaryRevision from "./Salary/SalaryRevision";
import Leave from "./Leave/Leave";
import Leaveapply from "./Leave/Leaveapply";
import LeaveBalances from "./Leave/LeaveBalances";
import LeaveCalendar from "./Leave/LeaveCalendar";
import HolidayCalendar from "./Leave/HolidayCalendar";
import Attendance from "./Attendance/Attendance";
import AttendanceInfo from "./Attendance/AttendanceInfo";
import DocumentCenter from "./DocumentCenter/Documentcenter";
import People from "./People";
import Helpdesk from "./Helpdesk";
import WorkflowDelegates from "./WorkflowDelegates";
import "./style.css";
import { Router, useLocation, useNavigate } from "react-router";
const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    icon: React.createElement(HomeOutlined),
    key: "home",
    label: "Home",
  },
  {
    icon: React.createElement(InfoOutlined),
    key: "feeds",
    label: "Feeds",
  },
  {
    icon: React.createElement(ProfileOutlined),
    key: "todo",
    label: "Todo",
    children: [
      { key: "todo/tasks", label: "Tasks" },
      { key: "todo/Review", label: "Review" },
    ],
  },
  {
    icon: React.createElement(MoneyCollectOutlined),
    key: "salary",
    label: "Salary",
    children: [
      { key: "salary/paysilps", label: "Paysilps" },
      { key: "salary/ytdreports", label: "YTD Reports" },
      { key: "salary/itstatements", label: "IT Statements" },
      { key: "salary/itdeclaraton", label: "IT Declaration" },
      { key: "salary/loansandadvances", label: "Loans and Advances" },
      { key: "salary/reimbursement", label: "Reimbursement" },
      { key: "salary/proofofinvestment", label: "Proof of Investment" },
      { key: "salary/salaryrevision", label: "Salary Revision" },
    ],
  },
  {
    icon: React.createElement(CarOutlined),
    key: "leave",
    label: "Leave",
    children: [
      { key: "leave/leaveapply", label: "Leave Apply" },
      { key: "leave/leavebalances", label: "Leave Balances" },
      { key: "leave/leavecalendar", label: "Leave Calendar" },
      { key: "leave/holidaycalendar", label: "Holiday Calendar" },
    ],
  },
  {
    icon: React.createElement(CalendarOutlined),
    key: "attendance",
    label: "Attendance",
    children: [{ key: "attendcance/attendanceinfo", label: "Attendance Info" }],
  },
  {
    icon: React.createElement(BookOutlined),
    key: "documentcenter",
    label: "Document Center",
  },
  {
    icon: React.createElement(TeamOutlined),
    key: "people",
    label: "People",
  },
  {
    icon: React.createElement(ToolOutlined),
    key: "helpdesk",
    label: "Helpdesk",
  },
  {
    icon: React.createElement(InteractionOutlined),
    key: "workflowdelegates",
    label: "Workflow Delegates",
  },
];
const App = () => {
  const [loadings, setLoadings] = useState(false);

  let location = useLocation();
  const navigate = useNavigate();

  const enterLoading = () => {
    setLoadings(true);
  };

  const quickItems = [
    {
      label: "continue",
      key: "1",
    },
  ];

  const contentRender = () => {
    if (location.pathname == "/home") {
      return <Home />;
    } else if (location.pathname == "/feeds") {
      return <Feeds />;
    } else if (location.pathname == "/todo/tasks") {
      return <Tasks />;
    } else if (location.pathname == "/todo/Review") {
      return <Review />;
    } else if (location.pathname == "/salary/paysilps") {
      return <Payslip />;
    } else if (location.pathname == "/salary/ytdreports") {
      return <YTDReports />;
    } else if (location.pathname == "/salary/itstatements") {
      return <ITStatements />;
    } else if (location.pathname == "/salary/itdeclaraton") {
      return <ITDeclaration />;
    } else if (location.pathname == "/salary/loansandadvances") {
      return <LoansandAdvances />;
    } else if (location.pathname == "/salary/reimbursement") {
      return <Reimbursement />;
    } else if (location.pathname == "/salary/proofofinvestment") {
      return <ProofofInvestment />;
    } else if (location.pathname == "/salary/salaryrevision") {
      return <SalaryRevision />;
    } else if (location.pathname == "/leave/leaveapply") {
      return <Leaveapply />;
    } else if (location.pathname == "/leave/leavebalances") {
      return <LeaveBalances />;
    } else if (location.pathname == "/leave/leavecalendar") {
      return <LeaveCalendar />;
    } else if (location.pathname == "/leave/holidaycalendar") {
      return <HolidayCalendar />;
    } else if (location.pathname == "/attendcance/attendanceinfo") {
      return <AttendanceInfo />;
    } else if (location.pathname == "/documentcenter") {
      return <DocumentCenter />;
    } else if (location.pathname == "/people") {
      return <People />;
    } else if (location.pathname == "/helpdesk") {
      return <Helpdesk />;
    } else if (location.pathname == "/workflowdelegates") {
      return <WorkflowDelegates />;
    }
  };
  const onClick = (e) => {
    navigate(`/${e.key}`);
  };

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
              onClick={onClick}
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
            <div className="content">{contentRender()}</div>
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      ></Footer>
    </Layout>
  );
};
export default App;
