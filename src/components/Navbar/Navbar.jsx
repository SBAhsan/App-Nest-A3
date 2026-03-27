import React from "react";
import logoImg from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import contributeImg from '../../assets/contribute.png';

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink className={({ isActive }) => isActive && 'font-semibold  bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 bg-clip-text text-transparent'} to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => isActive && 'font-semibold bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 bg-clip-text text-transparent'} to={"/apps"}>Apps</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => isActive && 'font-semibold bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 bg-clip-text text-transparent'} to={"/installation"}>Installation</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
                {navLinks}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl flex items-center">
            <img src={logoImg} className="w-8 h-8" />
            <h2 className="font-bold bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 bg-clip-text text-transparent">
              AppNest
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a href="https://github.com/SBAhsan" className="btn text-white bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500">
            <img src={contributeImg} alt="" />
            <span className="ml-1">Contribute</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
