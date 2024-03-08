function Nav() {
    const navClass = "w-full lg:w-1/3 shadow bg-neutral-50 flex flex-wrap justify-evenly py-2 md:rounded-full";
    const navItemClass = "md:bg-neutral-100 text-slate-500 rounded-full px-3 py-1";
    
    const menu = [
      "Intro",
      "Skills",
      "Projects",
      "Experience",
    ];

    return (
    <nav className={navClass}>
      {menu.map((item, index)=> (
        <a key={index} href={"#"+item} className={navItemClass}>{item}</a>
      ))}
    </nav>
  );
}

export default Nav;
