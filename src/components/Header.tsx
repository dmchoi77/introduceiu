import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Header: React.FC = () => {

    const [toggle, setToggle] = useState<null | Boolean>(null);
    const toggleMenu = (): void => {
        setToggle(!toggle);
    }

    return (
        <>
            <header className="header">
                <img className="artist-name" src="img/iu_logo.png" alt="logo" />
                <button className="menu-button" onClick={toggleMenu}>
                    <img src="img/menu.png" alt="menu-button" />
                </button>
            </header>
            <div className="side-nav">
                {
                    toggle === null ?
                        null :
                        <nav className={toggle ? "show-side-nav" : "hide-side-nav"}>
                            <ul className="menu">
                                <Link to={"/profile"}>
                                    <li>Profile</li>
                                </Link>
                                <Link to={"/works"}>
                                    <li>Works</li>
                                </Link>
                                <Link to={"/photo"}>
                                    <li>Photo</li>
                                </Link>
                            </ul>
                        </nav>
                }
            </div>
        </>

    )
}

export default Header