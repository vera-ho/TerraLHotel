import React from "react";
import { Link } from "react-router-dom";

const Header = ({ currentUser, logout }) => {
    const display = currentUser ? (               // a current user exists
        <div>
            <p>Hello, {currentUser.username}</p>
            <button onClick={logout}>Logout</button>
        </div>
            ) : (                                           // no users logged in
        <div>
            <Link className="btn" to="/signup">Sign Up</Link>
            <Link className="btn" to="/login">Log In</Link>
        </div>
    );

    return (
        <header className="nav-bar">
            <h1 className="logo">Terra l'Hotel</h1>
            <div>
                {display}
            </div>
        </header>
    );
}

export default Header;

// export default ({ currentUser, logout }) => {
//     const display = currentUser ? (               // a current user exists
//         <div>
//             <p>Hello, {currentUser.username}</p>
//             <button onClick={logout}>Logout</button>
//         </div>
//             ) : (                                           // no users logged in
//         <div>
//             <Link className="btn" to="/signup">Sign Up</Link>
//             <Link className="btn" to="/login">Log In</Link>
//         </div>
//     );

//     return (
//         <header className="nav-bar">
//         <h1 className="logo">Terra l'Hotel</h1>
//         <div>
//             {display}
//         </div>
//         </header>
//     );
// }