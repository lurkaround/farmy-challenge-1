import { Outlet } from 'react-router-dom';

import { BigSidebar, Navbar, SmallSidebar } from './../../../components';
import StyledSharedLayout from './StyledSharedLayout';

import { useState } from 'react';

const SharedLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <StyledSharedLayout>
      <main className='dashboard'>
        <SmallSidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <BigSidebar isSidebarOpen={isSidebarOpen} />
        <div>
          <Navbar toggleSidebar={toggleSidebar} />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </StyledSharedLayout>
  );
};
export default SharedLayout;
