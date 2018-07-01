import React from 'react';
import {Link} from 'react-router-dom'

import Flex from 'UI/components/Flex';
import Nav from 'UI/components/NavLink'

/**
 * @function NavList
 * @returns {XML}
 */
function NavList() {
  console.log(Nav)
  return (
    <Flex flexDirection="column" >
      <Link to="/odbornici">Odbornici</Link>
      <Link to="saziv-skupstine" >Saziv Skupstine</Link>
      <Link to="/sednica-skupstine">Sednica Skupstine</Link>
    </Flex>
  );
}

export default NavList;
