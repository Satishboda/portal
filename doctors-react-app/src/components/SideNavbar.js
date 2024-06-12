import React from "react";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  const { collapseSidebar } = useProSidebar();
  const role = localStorage.getItem("role");
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar className="app">
        <Menu>
          <MenuItem
            className="menu1"
            icon={
              <MenuRoundedIcon
                onClick={() => {
                  collapseSidebar();
                }}
              />
            }
          ></MenuItem>
          {role === "admin" && (
            <>
              <MenuItem
                component={<Link to="/dashboard" className="link" />}
                icon={<GridViewRoundedIcon />}
              >
                Dashboard
              </MenuItem>
              <MenuItem
                component={<Link to="/alldoctors" className="link" />}
                icon={<GridViewRoundedIcon />}
              >
                Members
              </MenuItem>
            </>
          )}
          {/* {role !== "admin" && (
            <MenuItem
              component={<Link to="/approved" className="link" />}
              icon={<ReceiptRoundedIcon />}
            >
              Members
            </MenuItem>
          )} */}
        </Menu>
      </Sidebar>
      <section></section>
    </div>
  );
};

export default SideNavbar;
