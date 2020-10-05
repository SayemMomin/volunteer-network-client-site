import React from 'react';

const Header = () => {
    return (
        <div className="container">
            <ul className="nav justify-content-end">
            <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
            </li>
            {/* <li className="nav-item">
                <a className="nav-link" href="/login">Register</a>
            </li> */}
            <li className="nav-item">
                <a className="nav-link" href="/event">Your Event</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/regList">Register List</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/admin">Admin</a>
            </li>
           
            </ul>
        </div>
    );
};

export default Header;