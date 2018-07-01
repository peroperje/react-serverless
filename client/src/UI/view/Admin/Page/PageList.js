import React, {Component} from 'react';

import PageWrapper from './PageWrapper'
import Flex from 'UI/components/Flex'
import Box from 'UI/components/Box'
import {Button} from 'UI/components/Button/index'
import FontAwesomeIcon,{faPlus} from 'UI/components/FontAwesomeIcon'

/**
 * @class PageWrapper
 * @extends React.Component
 * @description Render component
 */
class Page extends Component {

  handleOnClickAdd = ()=>{
    const {history,location:{pathname}} = this.props;
    history.push(`${pathname}/add`)
  };
  /**
   * @description render
   * @return {Object} JSX HTML Content
   */
  render() {
    const {entry} = this.props
    return (
      <PageWrapper title={`List of "${entry}"`} >
        <Flex>
          <Box w={2/3} bg="red">
            List
            <br />
          </Box>
          <Box w={1/3} >
            <Flex justifyContent="center">
              <Button
                color="white"
                bg="blue"
                onClick={this.handleOnClickAdd}
              >
                <FontAwesomeIcon icon={faPlus} /> ADD
              </Button>
            </Flex>
          </Box>
        </Flex>
      </PageWrapper>
    );
  }
}

export default Page;
