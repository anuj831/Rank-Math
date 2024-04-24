import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faInfoCircle, faShare, faTrash } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
      <div className="left-icon" style={{ backgroundColor: 'transparent' }}>{"<"}</div>

        <h3 className="head-text">
          <center>Bitcoin Wallet</center>
        </h3>
        <div className="right-icon" onClick={toggleMenu}>⋮</div>

        {menuOpen && (
          <div className="dropdown-menu">
            <div onClick={handleMenuItemClick}>
              Edit <FontAwesomeIcon icon={faEdit} className="icon" />
            </div>
            <hr />
            <div onClick={handleMenuItemClick}>
              Courier Info <FontAwesomeIcon icon={faInfoCircle} className="icon" />
            </div>
            <hr />
            <div onClick={handleMenuItemClick}>
              Share <FontAwesomeIcon icon={faShare} className="icon" />
            </div>
            <hr />
            <div onClick={handleMenuItemClick}>
              Remove <FontAwesomeIcon icon={faTrash} className="icon" />
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
