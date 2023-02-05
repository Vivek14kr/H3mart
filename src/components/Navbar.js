import React, { useState } from "react";
import { Drawer, Menu } from "antd";

import {
  MenuOutlined,
  SearchOutlined,
  SettingFilled,
  CaretDownFilled,
} from "@ant-design/icons";
import MenuItem from "antd/es/menu/MenuItem";
import AppMenu from "./AppMenu";
function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div style={{position:"fixed", width:"100%", zIndex:1}}>
      {" "}
      
      <span className="headerMenu">
        <AppMenu />
      </span>
      
    </div>
  );
}

export default Navbar;
