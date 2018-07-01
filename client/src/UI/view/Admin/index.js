import React from 'react';

import MainNav from './MainNav'
import SideBarNav from './SideBarNav';

import Home from './Home';

/**
 * @function Admin
 * @returns {XML}
 */
function Admin() {
  return <div>
    <MainNav/>
    <SideBarNav/>
    <Home />
  </div>;
}

export default Admin;
