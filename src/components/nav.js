import React from 'react';
import {NavLink} from 'react-router-dom';

export default props => {
    return(
        <ul className="nav nav-tabs mt-3">
            <li className="nav-item">
                <NavLink exact to="/" className="nav-link" activeClassName="active selected">Welcome</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/our-macarons" className="nav-link" activeClassName="active selected">Our-macarons</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/gifts-parties" className="nav-link" activeClassName="active selected">Gifts & Parties</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contact" className="nav-link" activeClassName="active selected">Contact Us</NavLink>
            </li>
        </ul>
    )
}