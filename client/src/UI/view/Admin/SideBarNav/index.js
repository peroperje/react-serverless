import React, {Component} from 'react';

import Fixed from 'UI/components/Fixed'
import ToggleBtn from './ToggleBtn'
import Drawer from 'UI/components/Drawer'
import NavList from './NavList'


/**
 * @class SideBarNav
 * @extends React.Component
 * @description Render component
 */
class SideBarNav extends Component {

  state = {
    open: false
  };
  handleOnToggle = () => {
    this.setState((prevState)=>({open:!prevState.open}))
  };

  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const {open} = this.state;
    return (
             <Fixed top={0} pt={2} >
             <ToggleBtn
                key="toggle"
                onClick={this.handleOnToggle}
              />
              <Drawer
                key="drawer"
                open={open}
                side='left'
                p={3}
                mt={4}
                color='white'
                bg='black'
              >
                <NavList/>
              </Drawer>
           </Fixed>
  );
  }
}

export default SideBarNav;
