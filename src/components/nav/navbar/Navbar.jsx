import StyledNavbar from './StyledNavbar';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './../../Logo';
import { useState } from 'react';
const Navbar = ({ toggleSidebar }) => {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <StyledNavbar>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className='logo-text'>Dashboard</h3>
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => setShowLogout(!showLogout)}>
            <FaUserCircle />
            User
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button
              type='button'
              className='dropdown-btn'
              onClick={() => console.log('Logging out...')}>
              logout
            </button>
          </div>
        </div>
      </div>
    </StyledNavbar>
  );
};
export default Navbar;
