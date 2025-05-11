import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

function Navbar() {
  return (
    <>
      <div className="navbar max-width">
        <div className="">
          <img src="/logo.png" alt="/logo" />
        </div>

        <ul className="ul">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "p-active" : "p-text")}
          >
            Home
          </NavLink>
          <NavLink
            to={"/shop"}
            className={({ isActive }) => (isActive ? "p-active" : "p-text")}
          >
            Shop
          </NavLink>
          <NavLink
            to={"/plant"}
            className={({ isActive }) => (isActive ? "p-active" : "p-text")}
          >
            Plant Care
          </NavLink>
          <NavLink
            to={"/blog"}
            className={({ isActive }) => (isActive ? "p-active" : "p-text")}
          >
            Blogs
          </NavLink>
        </ul>

        <div className="flex gap-6 items-center">
          <img
            className=" cursor-pointer"
            src="/search.png"
            width={23}
            alt=""
          />
          <img className=" cursor-pointer" src="/bag.png" width={23} alt="" />
          <button className="btn flex gap-2">
            <LoginOutlinedIcon />
            Login
          </button>
        </div>
      </div>
      <div className="max-width">
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;
