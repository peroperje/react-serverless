import React from 'react';

import MainNav from './MainNav'
import SideBarNav from './SideBarNav';

import Routes from './Routes';

/**
 * @function Admin
 * @returns {XML}
 */
function Admin() {
  return <div>
    <MainNav/>
    <SideBarNav/>
    <Routes />
  </div>;
}

export default Admin;
