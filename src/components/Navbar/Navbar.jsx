import styleNav from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
      <nav className={styleNav.nav}>
          <div className={styleNav.item}>
             <NavLink to={"/profile"} activeClassName={styleNav.activeLink}>Profile</NavLink>
          </div>
          <div className={styleNav.item}>
              <NavLink to={"/dialogs"} activeClassName={styleNav.activeLink}>Message</NavLink>
          </div><div className={styleNav.item}>
              <NavLink to={"/users"} activeClassName={styleNav.activeLink}>Users</NavLink>
          </div>
          <div className={styleNav.item}>
              <NavLink to={"/news"} activeClassName={styleNav.activeLink}>News</NavLink>
          </div>
          <div className={styleNav.item}>
              <NavLink to={"/music"} activeClassName={styleNav.activeLink}>Music</NavLink>
          </div>
          <div className={styleNav.item}>
              <NavLink to={"/settings"} activeClassName={styleNav.activeLink}>Settings</NavLink>
          </div>
      </nav>
  );
}

export default Navbar;