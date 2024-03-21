import React, { useState, useEffect, useRef } from "react";
import RouteRule from "@/router";
import { NavLink } from "react-router-dom";

function Nav() {
  const navItemClass = "text-slate-500 rounded-full px-3 py-1 ";
  const active = "bg-neutral-200";

  const navItems = RouteRule.children;

  return (
    <nav className="w-full md:w-4/5 lg:w-1/3 shadow bg-neutral-50 flex flex-wrap justify-evenly py-2 md:rounded-full">
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          to={"/"+(item.path||"")}
          className={({ isActive }) =>
            isActive ? navItemClass+active:navItemClass
          }
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
