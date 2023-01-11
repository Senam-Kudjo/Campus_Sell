import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { GrOverview } from "react-icons/gr";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { FcSettings } from "react-icons/fc";
import Lottie from "lottie-react";
import box from "../assets/anime1.json";
import Analytics from "../assets/analytics.json";

import "./BoardStyles.css";

const Board = () => {
  return (
    <section className="hero">
      <div className="innerBoard">
        <Lottie animationData={box} style={{ width: 80, marginLeft: 100 }} />
        <h1>CampusSell</h1>
        {/* <img src={Logo} className="logoImage" /> */}
        <ul>
          <li>
            {/* <button className="active"> */}
            <GrOverview className="iconPad" size={20} color={"red"} />
            <Link to={"/"} className="activeTextTab">
              Overview
            </Link>
            {/* </button> */}
          </li>
          <li>
            {/* <button> */}
            <MdOutlineProductionQuantityLimits size={20} />
            <Link to={"/products"}>Products</Link>
            {/* </button> */}
          </li>
          <li>
            {/* <button> */}
            <TbMessages size={20} />
            <Link to={"/inbox"}>Inbox</Link>
            {/* </button> */}
          </li>
          <li>
            {/* <button> */}
            <FcSettings size={20} />
            <Link to={"/settings"}>Settings</Link>
            {/* </button> */}
          </li>
        </ul>
        <div className="downloadButton">
          <h3 style={{ color: "white", textAlign: "center", padding: 11 }}>
            Download Our App
          </h3>
        </div>
      </div>

      {/* THE OTHER SIDE OF THE BOARD */}

      <section className="boardTwo">
        {/* fr = First Row */}
        <div className="firstRow">
          <div className="frTabs"> </div>
          <div className="frTabs"> </div>
          <div className="frTabs"> </div>
        </div>
        {/* END OF THE FIRST ROW */}

        {/* sr = Second Row */}
        <div className="secondRow">
          <div className="srTab">
            <Lottie
              animationData={Analytics}
              style={{
                width: 310,
                height: 240,
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            <h1>Know How Your Business is Performing</h1>
          </div>
        </div>
        {/* END OF THE SECOND ROW */}

        {/* START OF THIRD ROW */}
        {/* tr = third Row */}
        <div className="thirdRow">
          <h3>Order Tracker</h3>
          <div className="orderTrackerTab">
            <div className="trTabs">
              <h1>12</h1>
              <span> New Orders</span>
            </div>
            <div className="trTabs">
              <h1>8</h1>
              <span> In-Progress</span>
            </div>
            <div className="trTabs">
              <h1>13</h1>
              <span> Shipped</span>
            </div>
            <div className="trTabs">
              <h1>3</h1>
              <span> Failed</span>
            </div>
          </div>
        </div>
        {/* END OF THE THIRD ROW */}

        {/* START OF FOURTH ROW */}
        {/* fr = fourth Row */}
        <div className="fourthRow">
          <h3>Performing Products</h3>
          <div className="topProductsTab">
            <div className="frtTabs"></div>
            <div className="frtTabs"></div>
            <div className="frtTabs"></div>
            <div className="frtTabs"></div>
          </div>
        </div>
        {/* END OF THE FOURTH ROW */}

        {/* START OF FIFTH ROW */}
        {/* fitr = fifth Row */}
        <div className="fifthRow">
          <h3>Recent Sales</h3>
          <div className="recentSalesTab">
            <div className="fifthTabs"></div>
            <div className="fifthTabs"></div>
            <div className="fifthTabs"></div>
            <div className="fifthTabs"></div>
          </div>
        </div>
        {/* END OF THE FIFTH ROW */}
      </section>
    </section>
  );
};

export default Board;
