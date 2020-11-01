import * as React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <nav data-test="navbar-component">
            <a href="#">
                <img
                    className="navbar__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
                    alt="Netflix logo"
                />
                <img
                    className="navbar__avatar"
                    src="https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABWL3CV4UP6WBRQsj16ZhA4nvp6cmVN656Jc95KldbESm4WlLqV5R_5RspBTTJhPviqw95QOxews8R6WCr8q9X_SAVw.png?r=88c"
                    alt="User avatar"
                />
            </a>
        </nav>
    );
}

export interface NavbarProps {}

export default Navbar;
