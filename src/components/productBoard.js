import React from "react";
import { Link } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { FcSettings } from "react-icons/fc";
import Lottie from "lottie-react";
import box from "../assets/anime1.json";

import "./productBoardStyles.css";

const ProductBoard = () => {
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
            <Link to={"/"}>Overview</Link>
            {/* </button> */}
          </li>
          <li>
            {/* <button> */}
            <MdOutlineProductionQuantityLimits size={20} />
            <Link to={"/products"} className="activeTextTab">
              Products
            </Link>
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
        <div className="firstRowP">
          <img id="storePic"></img>
          <div className="storeInfo">
            <h1>Store Name</h1>
            <span>Vendor Name : Senam Kudjo Humado</span>
            <span>Location : Bubuashie</span>
            <span>Telephone : 0549088773</span>
          </div>
        </div>

        <div className="secondRowP">
          <h3>Add New Products To Your Store</h3>
          <form className="firstRowForm">
            <label for="productName"> Product Name : </label>
            <input type="text" id="productName" />

            <label for="category"> Category : </label>
            <select name="category" id="category">
              <option>Accessories</option>
              <option>Clothes</option>
              <option>Deliveries</option>
              <option>Bags</option>
              <option>Gadgets</option>
              <option>Food</option>
              <option>Skin Care</option>
              <option>Services</option>
            </select>

            <label for="price"> Price : </label>
            <input type="number" id="price" placeholder="eg. 16ghc" />
            <label for="image" className="imageLabel">
              Select Image of Product :
            </label>
            <input type="file" className="image" />

            <input type="submit" className="submitBtn" />
            <input type="reset" className="resetBtn" />
          </form>
        </div>

        <div className="productList">
          <div className="headings"></div>
        </div>
      </section>
    </section>
  );
};

export default ProductBoard;
