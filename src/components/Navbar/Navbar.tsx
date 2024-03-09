import React from "react";
import './Navbar.css';
import Menubuttons from "../Button/Button";
function Navbar(){
    return(
        <nav className="navbar">
            <div>
                <a className="nombre" href="https://github.com/AxlBasilioa">Axl Basilio</a>
            </div>
            <div className="buttons-menu">
                <Menubuttons/>
            </div>
        </nav>
    );
}
export default Navbar;