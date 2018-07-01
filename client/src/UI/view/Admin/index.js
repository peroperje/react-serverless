import React from 'react';

import MainNav from './MainNav'
import SideBarNav from './SideBarNav';

import Pages from './Pages';

/**
 * @function Admin
 * @returns {XML}
 */
function Admin() {
  return <div>
    <MainNav/>
    <SideBarNav/>
    <Pages />
  </div>;
}

export default Admin;
