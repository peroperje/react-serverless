import React from 'react';

import Container from 'UI/components/Container';
import Heading from 'UI/components/Heading';



/**
 * @function PageWrapper
 * @param props
 * @returns {XML}
 */
function PageWrapper({title,children}) {
  return <Container p={4} m={4} >
    <Heading textAlign="center">{title}</Heading>
    {children}
  </Container>;
}

export default PageWrapper;
