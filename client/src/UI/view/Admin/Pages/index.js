import React from 'react';
import {Switch,Route} from 'react-router-dom'

import Container from 'UI/components/Container'

/**
 * @function Pages
 * @returns {XML}
 */
function Pages() {
  return <Container p={4} m={4} >
    <Switch>
    <Route
      exact
      path="/"
      component={()=>{
        console.log('home')
        return 'Home'
      }}
    />
    <Route
      exact
      path="/odbornici"
      component={()=>{
        console.log('odbornici')
        return 'odbornici'
      }}
    />
    <Route
      exact
      path="/saziv-skupstine"
      component={()=>'/saziv-skupstine'}
    />
    <Route
      exact
      path="/sednica-skupstine"
      component={()=>'/sednica-skupstine'}
    />
  </Switch>
  </Container>;
}

export default Pages;
