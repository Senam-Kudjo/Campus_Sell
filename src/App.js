import React, { useState } from "react";
import "./index.css";
import Overview from "./routes/Overview";
import Settings from "./routes/Settings";
import Products from "./routes/Products";
import Inbox from "./routes/Inbox";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/products" element={<Products />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
