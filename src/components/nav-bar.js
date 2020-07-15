import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const NavigationBar = (props) => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };

  return (
    <div className="nav-wrapper">
      <div className="nav-link-wrapper">
        <NavLink exact to="/login" activeClassName="nav-link-active">
          <i class="fas fa-plug"></i>
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink exact to="/home" activeClassName="nav-link-active">
          Home
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink exact to="/vehicle-manager" activeClassName="nav-link-active">
          Vehicle Manager
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink exact to="/parking-garage" activeClassName="nav-link-active">
          Parking Garage
        </NavLink>
      </div>
      <div className="nav-link-wrapper">
        <NavLink exact to="/vehicle-articles" activeClassName="nav-link-active">
          Electric Articles
        </NavLink>
      </div>
    </div>
  );
};

export default withRouter(NavigationBar);
