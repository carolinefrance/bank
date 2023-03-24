import React, { useContext } from 'react';
import { UserContext } from '../App';
import { NavbarItem } from './NavbarItem';
import { NavLink, useLocation } from 'react-router-dom';
import './styles/NavBar.css';

export function NavBar ({loggedInUser}) {
    const ctx = useContext(UserContext);
    const location = useLocation();

    function setActiveTab(tab) {
        ctx.activeTab = tab;
    }

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-custom">
          <NavLink className="navbar-brand" to="/"><i>Insecure</i>TRUST</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
              </li>
              { !loggedInUser ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/create-account">Create Account</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/login">Log In</NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/deposit">Deposit</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/withdraw">Withdraw</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/all-data">All Data</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
}