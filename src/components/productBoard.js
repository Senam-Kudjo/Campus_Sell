import React from "react";
import { Link } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { FcSettings } from "react-icons/fc";
import Lottie from "lottie-react";
import box from "../assets/anime1.json";
import storePic from "../assets/storePic.jpg";

import "./productBoardStyles.css";
import "./BoardStyles.css";

const productBoard = () => {
  return (
    <section className="hero">
      <div className="adminTab">
        <Lottie animationData={box} style={{ width: 80 }} />
        <h3>Campus Mall</h3>

        {/* THE START OF THE TABS ON THE LEFT SIDE OF THE SCREEN THAT CONTROLS THE RIGHT SIDE */}
        <div>
          <ul>
            <li>
              <GrOverview size={22} />
              <Link to={"/"}>Overview</Link>
            </li>

            <li>
              <MdOutlineProductionQuantityLimits size={22} />
              <Link to={"/"} className="activeTab">
                Products
              </Link>
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
          {/* THE DOWNLOAD BUTTON */}
        </div>
        <button>Download Our App</button>
        {/* END OF THE DOWNLOAD BUTTON */}
      </div>
      {/* END OF THE LEFT CONTAINER PAGE */}

      {/* START OF THE RIGHT CONTAINER PAGE */}
      <section className="productInfo">
        <div className="firstRowP">
          <img src={storePic} id="storePic"></img>
          <div className="vendorInfo">
            <h1>Store Name</h1>
            <span>Vendor Name : Senam Kudjo Humado</span>
            <span>Location : Bubuashie</span>
            <span>Telephone : 0549088773</span>
          </div>
        </div>
        {/* THE SECOND ROW OF THE PRODUCT INFO */}
        <div className="productAddition">
          <h1>Add New Products to Your Store</h1>
          <form>
            <div>
              <label for="productName">Product Name : </label>
              <input
                type="text"
                id="productName"
                name="productName"
                placeholder="Product Name"
                required
              />
            </div>

            <div>
              <label for="productPrice">Product Price : </label>
              <input
                type="number"
                id="productPrice"
                name="productPrice"
                placeholder="Product Price"
                required
              />
            </div>

            <div>
              <label for="productName">Category : </label>
              <input
                type="text"
                id="productName"
                name="productName"
                placeholder="Product Name"
                required
              />
            </div>

            <div>
              <label for="productImage">Product Image : </label>
              <input
                type="file"
                id="productImage"
                name="productImage"
                required
              />
            </div>

            <div className="submitAndResetButtons">
              <input type="submit" className="submitButton" />
              <input type="reset" className="resetButton" />
            </div>
          </form>
        </div>

        <div className="productList">
          <h3>Product List</h3>
          <table>
            <tr className="tableRow">
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Created Time</th>
              <th>Edit</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>{/* use DOM MANIPULATION TO MAKE THE INSERTIONS */}</tr>
          </table>
        </div>
      </section>
    </section>
  );
};

export default productBoard;
