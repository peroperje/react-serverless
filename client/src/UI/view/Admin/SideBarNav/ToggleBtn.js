import React from 'react';

import {ButtonTransparent} from 'UI/components/Button'
import FontAwesomeIcon,{faBars} from 'UI/components/FontAwesomeIcon'



/**
 * @function ToggleBtn
 * @returns {XML}
 */
function ToggleBtn({onClick}) {
  return <ButtonTransparent onClick={onClick} color="white" >
    <FontAwesomeIcon icon={faBars}/>
  </ButtonTransparent>;
}

export default ToggleBtn;
