import NavLinks from './../../nav/navlinks/NavLinks';

import Logo from './../../Logo';
import StyledBigSidebar from './StyledBigSidebar';

const BigSidebar = ({ isSidebarOpen }) => {
  return (
    <StyledBigSidebar>
      <div
        className={
          isSidebarOpen
            ? 'sidebar-container '
            : 'sidebar-container show-sidebar'
        }>
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </StyledBigSidebar>
  );
};
export default BigSidebar;
