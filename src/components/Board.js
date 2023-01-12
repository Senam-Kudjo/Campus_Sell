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
      <div className="adminTab">
        <Lottie animationData={box} style={{ width: 80 }} />
        <h3>Campus Mall</h3>

        <div>
          <ul>
            <li>
              <GrOverview size={22} color={"red"} />
              <Link to={"/"} className="activeTab">
                Overview
              </Link>
            </li>

            <li>
              <MdOutlineProductionQuantityLimits size={22} />
              <Link to={"/products"}>Products</Link>
            </li>

            <li>
              <TbMessages size={22} />
              <Link to={"/inbox"}>Inbox</Link>
            </li>

            <li>
              <FcSettings size={22} />
              <Link to={"/settings"}>Settings</Link>
            </li>
          </ul>
        </div>
        <button>Download Our App</button>
      </div>

      <div className="tabInfo">
        {/* the first row/line */}
        <div className="firstRow">
          {/* fr = firstRow */}
          <div className="fr">g</div>
          <div className="fr">g</div>
          <div className="fr">g</div>
        </div>

        {/* second row/line */}
        <div className="secondRow">
          <div className="banner">
            <Lottie
              animationData={Analytics}
              style={{
                width: 200,
                height: 150,
                marginRight: 50,
              }}
            />
            Know How Your
            <br />
            Business Is Faring
          </div>
        </div>

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
      </div>
    </section>
  );
};

export default Board;
