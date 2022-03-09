import React from "react";
import { CgPerformance as Icon } from "react-icons/cg";
import {
  VscBriefcase as JobsIcon,
  VscQuestion as QueryIcon
} from "react-icons/vsc";
import {
  IoFileTrayFullOutline as FileIcon,
  IoPeopleOutline as MemberIcon,
  IoApps as AppsIcon
} from "react-icons/io5";
import {
  BsThreeDotsVertical as MenuIcon,
  BsPersonCircle as LogoIcon
} from "react-icons/bs";
import { MdOutlineMessage as MessageIcon } from "react-icons/md";
import "./sideNavStyle.scss";

function SideNavBar() {
  return (
    <nav id="sidebarMenu" className="sideNav">
      <div className="logo-wrapper">
        <LogoIcon size={25} className="side-nav-icon" />
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Icon className="side-nav-icon" size={25} color={"white"} />
        </li>
        <li className="nav-item">
          <FileIcon className="side-nav-icon" size={25} color={"white"} />
        </li>
        <li className="nav-item active menu">
          <JobsIcon
            className="side-nav-icon p-2 active"
            size={50}
            color={"white"}
          />
          <MenuIcon size={15} color={"white"} />
        </li>
        <li className="nav-item menu">
          <MemberIcon className="side-nav-icon" size={30} color={"white"} />
          <MenuIcon size={15} color={"white"} />
        </li>
      </ul>
      <ul className="nav-list nav-footer">
        <li className="nav-item">
          <QueryIcon className="side-nav-icon" size={25} />
        </li>
        <li className="nav-item">
          <MessageIcon className="side-nav-icon" size={25} />
        </li>
        <li className="nav-item">
          <AppsIcon className="side-nav-icon apps" size={25} />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavBar;
