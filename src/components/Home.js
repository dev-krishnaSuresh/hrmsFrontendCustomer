import "./style.css";
import React, { useState, useEffect } from "react";
import moment from "moment";
import { Col, Divider, Row } from "antd";
function Home() {
  const [currentTime, setCurrentTime] = useState(
    moment().format("DD MMM YYYY HH:mm:ss")
  );
  const DemoBox = (props) => (
    <div className="boxes">
      <p className={`height-${props.value}`}>{props.children}</p>
    </div>
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format("DD MMM YYYY HH:mm:ss"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="homeContent">
        <div className="review">
          <DemoBox value={200}>Review</DemoBox>
        </div>
        <div className="time">
          <DemoBox value={100}>
            <p> {currentTime}</p>
          </DemoBox>
        </div>
        <div className="holidays">
          <DemoBox value={200}>Upcoming Holidays</DemoBox>
        </div>
        <div className="quickAccess">
          <DemoBox value={100}>Quick Access</DemoBox>
        </div>
        <div className="payslip">
          <DemoBox value={270}>Payslip</DemoBox>
        </div>
        <div className="itDeclaration">
          <DemoBox value={100}>IT Declaration</DemoBox>
        </div>
        <div className="track">
          <DemoBox value={0}>Track</DemoBox>
        </div>
        <div className="poi">
          <DemoBox value={80}>POI</DemoBox>
        </div>
      </div>
    </>
    // <div className="homeContent">
    //   <div className="homeContent1">Review</div>
    //   <div className="homeContent2">
    //     <p> {currentTime}</p>
    //   </div>
    //   <div className="homeContent3">Review</div>
    // </div>
  );
}

export default Home;
