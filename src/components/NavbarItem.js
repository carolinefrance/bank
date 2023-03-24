// Popup.js

import React, { useState } from "react";
import { Link } from "react-router-dom";

export function NavbarItem({ title, description, path }) {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  return (
    <div className="navbar-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link to={path}><span className="nav-link">{title}</span></Link>
      {showDescription && <div className="description">{description}</div>}
    </div>
  );
}