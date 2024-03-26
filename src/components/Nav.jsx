import RouteRule from "@/router";
import { NavLink } from "react-router-dom";

/**
 * The nav bar component, loading nav items from router object
 * @param {*} param0 
 * @returns 
 */
function Nav({className}) {
  const navItemClass = "text-slate-500 rounded-full px-3 py-1";
  const active = "bg-base-200";

  const navItems = RouteRule.children;

  return (
    <nav className={`shadow bg-base-100 flex flex-wrap justify-evenly py-2 md:rounded-full ${className || ""}`}>
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          to={"/"+(item.path||"")}
          className={({ isActive }) =>
            isActive ? `${navItemClass} ${active}`:navItemClass
          }
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
