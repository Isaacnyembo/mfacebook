

import { MenuLinks } from "../constants";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <nav className="sticky  top-0  border-b px-4 mx-4 md:mx-0 bg-white border-slate-400 z-40">
      <div className="flex justify-between mt-2 ">
        {MenuLinks.map((MenuLink, index) => (
          <div className=" flex flex-col justify-center  w-12 h-12" key={index}>
            <NavLink
              to={MenuLink.mLink}
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              {MenuLink.mIcon}
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
