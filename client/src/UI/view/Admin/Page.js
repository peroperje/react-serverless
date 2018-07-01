import React from 'react';

import Container from 'UI/components/Container';
import Heading from 'UI/components/Heading';
import Flex from 'UI/components/Flex'
import Box from 'UI/components/Box'
import {Button} from 'UI/components/Button'
import FontAwesomeIcon,{faPlus} from 'UI/components/FontAwesomeIcon'

/**
 * @function Page
 * @param props
 * @returns {XML}
 */
function Page(props) {
  console.log(props)
  return <Container p={4} m={4}>
    <Heading textAlign="center">Page title </Heading>
    <Flex>
      <Box w={2/3} bg="red">
        List
        <br />
        List
        <br />
        List
        <br />
        List
        <br />
      </Box>
      <Box w={1/3} >
        <Flex justifyContent="center">
          <Button
            color="white"
            bg="blue"
          >
            <FontAwesomeIcon icon={faPlus} /> ADD
          </Button>
        </Flex>
      </Box>
    </Flex>
  </Container>;
}

export default Page;
