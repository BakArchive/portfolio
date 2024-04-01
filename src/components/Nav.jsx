import RouteRule from "@/router";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import config from "@/config";

/**
 * The nav bar component, loading nav items from router object
 * @param {*} param0 
 * @returns 
 */
function Nav({className, titleRef}) {
  const navItemClass = "text-slate-500 rounded-full px-3 py-1";
  const active = "bg-base-200";

  const navItems = RouteRule.children;
  const location = useLocation();

  useEffect(()=> {
    let newTitle = "Not Found"; // not found by default
    // root
    if (location.pathname === '/') newTitle = navItems[0].title;
    else { // other path
      for (let i = 1;i<navItems.length;++i) {
        if (location.pathname === `/${navItems[i].path}`) {
          newTitle = navItems[i].title;
          break;
        }
      } 
    }
    titleRef.current = `${config.sitename} | ${newTitle}`;
    document.title = titleRef.current;
  }, [location]);

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
