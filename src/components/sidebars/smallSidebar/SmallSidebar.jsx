import StyledSmallSidebar from './StyledSmallSidebar';
import { FaTimes } from 'react-icons/fa';
import Logo from './../../Logo';

import NavLinks from './../../nav/navlinks/NavLinks';

const SmallSidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <StyledSmallSidebar>
      <div
        className={
          isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }>
        <div className='content'>
          <button className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </StyledSmallSidebar>
  );
};
export default SmallSidebar;
