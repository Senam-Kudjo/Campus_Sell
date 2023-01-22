import React from "react";
import { Link } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { FcSettings } from "react-icons/fc";
import Lottie from "lottie-react";
import box from "../assets/anime1.json";
import { IoIosSend } from "react-icons/io";

import "./BoardStyles.css";
import "./inboxBoardStyles.css";

const InboxBoard = () => {
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
              <Link to={"/"} className="activeTab">
                Inbox
              </Link>
            </li>

            <li>
              <FcSettings size={22} />
              <Link to={"/settings"}>Settings</Link>
            </li>
          </ul>
          {/* THE DOWNLOAD BUTTON */}
        </div>
        <button>Download Our App</button>
        {/* END OF THE DOWNLOAD BUTTON */}
      </div>

      {/* END OF THE LEFT TAB PAGE */}

      {/* MIDDLE LANE, SPECIFIC MESSAGE BOX */}
      <div id="chatBox">
        <div id="usernameHeader">Customer Name</div>
        <div id="messageArea"></div>
        <div id="textInputArea">
          <input type="text" id="texting" />
          <IoIosSend size={35} style={{ cursor: "pointer" }} id="sendIcon" />
        </div>
      </div>
      {/* END OF MIDDLE LANE */}

      {/* THIS IS THE LANE WHERE PEOPLE WHO HAVE CONTACTED HIM WILL BE */}
      <div id="messagesFrom">
        <div id="messageHeader"> Messages From Customers</div>
        <div className="messaged"></div>
        <div className="messaged"></div>
        <div className="messaged"></div>
      </div>
    </section>
  );
};

export default InboxBoard;
