import React, { useState } from "react";
import { Drawer, Menu } from "antd";

import {
  MenuOutlined,
  SearchOutlined,
  SettingFilled,
  CaretDownFilled,
} from "@ant-design/icons";
import MenuItem from "antd/es/menu/MenuItem";

function AppMenu({ isInline = false }) {
  return (
    <Menu
      mode={isInline ? "inline" : "horizontal"}
      style={{
        display: "flex",
        justifyContent: "space-around",

        alignItems: "center",
        fontSize: "15px",
   
        backgroundColor: "white",

      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
      
          padding: 5,
          alignItems: "center",
        }}
      >
        <MenuItem>Coins</MenuItem>
        <MenuItem>Exchanges</MenuItem>
        <MenuItem>Swap</MenuItem>
      </div>
      <div
        className="menu-img"
        style={{
          width: "fit-content",
          justifyContent: "center",
          alignItems: "center",
          padding:5,
       
        
        }}
      >
        <img
          src="https://coincap.io/static/logos/black.svg"
          alt=" dfnkd jdjf"
          width={"80px"}
        />
      </div>
      <div
        style={{
          display: "flex",
  
          padding: 5,
         
        }}
      >
        <MenuItem>
          USD <CaretDownFilled />
        </MenuItem>
        <MenuItem>
          English <CaretDownFilled />
        </MenuItem>
        <MenuItem>
          <SearchOutlined />
        </MenuItem>
        <MenuItem>
          <SettingFilled />
        </MenuItem>
      </div>
    </Menu>
  );
}

export default AppMenu;
