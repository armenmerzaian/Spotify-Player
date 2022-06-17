import React from "react";
import { BrandLogo } from "./BrandLogo";
import Playlists from "./Playlists";
import SideMenu from "./SideMenu";

export const Sidebar = () => {
  return (
    <div className="h-full bg-stone-900">
      <BrandLogo />
      <SideMenu />
      <Playlists />
    </div>
  );
};

export default Sidebar;
