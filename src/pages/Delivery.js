import React from "react";
import { Outlet } from "react-router-dom";
import Foodcart from "../components/Foodcart";
import InsideFilter from "../components/InsideFilter";

const Delivery = () => {
  return (
    <div className="delivery">
      <InsideFilter/>
      <Outlet/>
      
    </div>
  );
};

export default Delivery;
