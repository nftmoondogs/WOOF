import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div id="social" className="navigation">
      <nav className="navbar navbar-expand navbar-dark pl-16 font-poppins font-normal text-[18px] leading-[27px] text-white pb-6 bg-foot">
        <div className="container">
          <div>
            <ul className="navbar-nav ml-auto">
            
              <li className="nav-item">
                <NavLink className="nav-link" to="/WlChecker">
                Click to expand WL and Vip Search Bar ↓
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
