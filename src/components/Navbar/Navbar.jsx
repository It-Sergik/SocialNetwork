import styleNav from "./Navbar.module.css";

const Navbar = () => {
  return (
      <nav className={styleNav.nav}>
          <div className={styleNav.item}>
             <a>Profile</a>
          </div>
          <div className={styleNav.item}>
              <a>Message</a>
          </div>
          <div className={styleNav.item}>
              <a>News</a>
          </div>
          <div className={styleNav.item}>
              <a>Music</a>
          </div>
          <div className={styleNav.item}>
              <a>Settings</a>
          </div>
      </nav>
  );
}

export default Navbar;