import React, { useState } from "react";
import { Drawer, Menu } from "antd";
import "./App.css"
import { MenuOutlined, SearchOutlined ,SettingFilled, CaretDownFilled} from "@ant-design/icons";
import MenuItem from "antd/es/menu/MenuItem";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
function App() {
  
  return (
    <div style={{background:"#eceff1" ,height:"fit-content", zIndex:-1}}>
     <Navbar/>
     <Home/>
    </div>
  );
}


export default App;
