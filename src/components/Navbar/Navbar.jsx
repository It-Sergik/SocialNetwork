import styleNav from "./Navbar.module.css";

const Navbar = () => {
  return (
      <nav className={styleNav.nav}>
          <div className={styleNav.item}>
             <a href={"/profile"}>Profile</a>
          </div>
          <div className={styleNav.item}>
              <a href={"/dialogs"}>Message</a>
          </div>
          <div className={styleNav.item}>
              <a href={"/news"}>News</a>
          </div>
          <div className={styleNav.item}>
              <a href={"/music"}>Music</a>
          </div>
          <div className={styleNav.item}>
              <a href={"/settings"}>Settings</a>
          </div>
      </nav>
  );
}

export default Navbar;