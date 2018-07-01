import React, {Component} from 'react';

import Absolute from 'UI/components/Absolute'
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
    open: true
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
           <Absolute>
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
           </Absolute>
  );
  }
}

export default SideBarNav;
