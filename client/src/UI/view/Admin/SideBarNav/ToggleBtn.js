import React from 'react';

import {ButtonTransparent} from 'UI/components/Button'
import FontAwesomeIcon,{faBars} from 'UI/components/FontAwesomeIcon'



/**
 * @function ToggleBtn
 * @returns {XML}
 */
function ToggleBtn({onClick}) {
  return <ButtonTransparent p={0} onClick={onClick} color="white" >
    <FontAwesomeIcon size="2x" icon={faBars}/>
  </ButtonTransparent>;
}

export default ToggleBtn;
