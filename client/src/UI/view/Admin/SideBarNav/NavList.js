import React from 'react';

import Flex from 'UI/components/Flex';
import {NavRouterLink} from 'UI/components/NavLink'

/**
 * @function NavList
 * @returns {XML}
 */
function NavList() {
  return (
    <Flex flexDirection="column" >
      <NavRouterLink to="/odbornici">Odbornici</NavRouterLink>
      <NavRouterLink to="saziv-skupstine" >Saziv Skupstine</NavRouterLink>
      <NavRouterLink to="/sednica-skupstine">Sednica Skupstine</NavRouterLink>
    </Flex>
  );
}

export default NavList;
