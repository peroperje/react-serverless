import React from 'react';
import PageWrapper from './PageWrapper'

/**
 * @function PageAdd
 * @param props
 * @returns {XML}
 */
function PageAdd({entry}) {
  return <PageWrapper title={`Add new item to ${entry}`}>I am add page</PageWrapper>;
}

export default PageAdd;
