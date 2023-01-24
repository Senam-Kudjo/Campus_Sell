import React from "react";
import { Link } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { FcSettings } from "react-icons/fc";
import Lottie from "lottie-react";
import box from "../assets/anime1.json";

import "./BoardStyles.css";
import "./settingBoardStyles.css";

const settingBoard = () => {
  return (
    <section className="hero">
      <div className="adminTab">
        <Lottie animationData={box} style={{ width: 80 }} />
        <h3>Campus Mall</h3>

        {/* THE START OF THE TABS ON THE LEFT SIDE OF THE SCREEN THAT CONTROLS THE RIGHT SIDE */}
        <div>
          <ul>
            <li>
              <GrOverview size={22} color={"red"} />
              <Link to={"/"}>Overview</Link>
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
              <Link to={"/"} className="activeTab">
                Settings
              </Link>
            </li>
          </ul>
          {/* THE DOWNLOAD BUTTON */}
        </div>
        <button>Download Our App</button>
        {/* END OF THE DOWNLOAD BUTTON */}
      </div>

      {/* END OF THE LEFT TAB PAGE */}
      <div id="settingsSection">
        <h6>Change Profile Settings</h6>
        <div className="change">
          <label for="storeImage">Change Store Image : </label>
          <input type="file" id="storeImage" name="storeImage" required />

          <label for="storeName">Change Store Name : </label>
          <input
            type="text"
            id="settingInput"
            name="changeStoreName"
            required
          />

          <label for="storeLocation">Change Store Location : </label>
          <input
            type="text"
            id="settingInput"
            name="changeStoreLocation"
            required
          />

          <label for="storeContact">Change Store Contact : </label>
          <input
            type="tel"
            id="settingInput"
            name="changeStoreContact"
            required
          />
        </div>
      </div>
      {/* START OF SETTING SECTION */}
    </section>
  );
};

export default settingBoard;
