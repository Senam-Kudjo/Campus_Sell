import React from "react";
import { Link } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { FcSettings } from "react-icons/fc";
import Lottie from "lottie-react";
import box from "../assets/anime1.json";

import "./BoardStyles.css";
const NavBar = () => {
  return (
    <div className="innerBoard">
      <Lottie animationData={box} style={{ width: 80, marginLeft: 100 }} />
      <h1>CampusSell</h1>
      <ul>
        <li>
          <GrOverview className="iconPad" size={20} color={"red"} />
          <Link to={"/"} className="activeTextTab">
            Overview
          </Link>
        </li>

        <li>
          <MdOutlineProductionQuantityLimits size={20} />
          <Link to={"/products"}>Products</Link>
        </li>

        <li>
          <TbMessages size={20} />
          <Link to={"/inbox"}>Inbox</Link>
        </li>

        <li>
          <FcSettings size={20} />
          <Link to={"/settings"}>Settings</Link>
        </li>
      </ul>
      <div className="downloadButton">
        <h3 style={{ color: "white", textAlign: "center", padding: 11 }}>
          Download Our App
        </h3>
      </div>
    </div>
  );
};

export default NavBar;
