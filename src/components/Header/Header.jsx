import styleHead from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styleHead.header}>
            <img src= "https://cdn.logo.com/hotlink-ok/logo-social.png"/>
            <div className={styleHead.loginBlock}>
                {props.isAuth ? props.login :
                    <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;