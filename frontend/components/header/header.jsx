import React from "react";
import { Link } from "react-router-dom";

const Header = ({ currentUser, logout }) => {
    const display = currentUser ? (               // a current user exists
        <div>
            <p className="welcome-user">Hello, {currentUser.fname}</p>
            <button className="logout-button" onClick={logout}>Logout</button>
        </div>
            ) : (                                 // no users logged in
        <div>
            <Link className="btn" to="/register">Register</Link>
            <Link className="btn" to="/signin">Sign In</Link>
        </div>
    );

    const icon = currentUser ? (
        <Link to={`/user/${currentUser.id}`} className="nav-menu">
            <div className="nav-user-icon"></div>
            <div className="nav-menu-icon"></div>
        </Link>
    ) : (
        <Link to={`/signin`} className="nav-menu">
            <div className="nav-user-icon"></div>
            <div className="nav-menu-icon"></div>
        </Link>
    );

    // Bandaid
    // currentUser ? currentUser : currentUser = {id: 0};

    return (
        <header className="nav-bar">
            <Link className="logo" to="/">Terra l'Hotels</Link>
            <div className="nav-links">
                <Link className="btn" to="/">Search Hotels</Link>
                <Link className="btn" to="/hotelsyoulove">My Lists</Link>
                {display}
            </div>
            {/* <div className="nav-menu"> */}
            <div>
                {icon}
                {/* <Link to={`/user/${currentUser.id}`} className="nav-menu">
                    <div className="nav-user-icon"></div>
                    <div className="nav-menu-icon"></div>
                </Link> */}
            </div>
        </header>
    );
}

export default Header;