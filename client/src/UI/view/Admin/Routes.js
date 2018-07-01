import React from 'react';
import {Switch,Route} from 'react-router-dom'

import Page from './Page'

const routDefinition = [
  {
    exact: true,
    path:"/",

  },{
    exact: true,
    path:"/odbornici",
    pageProps:{
      title:'Odbornici',

    }

  },{
    exact: true,
    path:"/saziv-skupstine",
    pageProps:{
      title:'Saziv Skupstine',

    }

  },{
    exact: true,
    path:"/sednica-skupstine",
    pageProps:{
      title:'Sednica Skupstine',

    }

  }
];

/**
 * @function Routes
 * @returns {XML}
 */
function Routes() {
  return <Switch>
      {
        routDefinition.map(
          (route,index) => {
            return [
              <Route
                    key={`${index}-list`}
                    {...route}
                    render={
                        (props) => {
                          return <Page {...props} />
                        }
                    }
              />,
              <Route
                    key={`${index}-add`}
                    {...{...route,...{path:`${route.path}/add`}}}
                    render={
                        (props) => {
                          return <Page {...props} />
                        }
                    }
              />,
              <Route
                    key={`${index}-edit`}
                    {...{...route,...{path:`${route.path}/:id/edit`}}}
                    render={
                        (props) => {
                          return <Page {...props} />
                        }
                    }
              />,
              <Route
                    key={`${index}-item`}
                    {...{...route,...{path:`${route.path}/:id`}}}
                    render={
                        (props) => {
                          return <Page {...props} />
                        }
                    }
              />,
            ]
          }
        )
      }
  </Switch>;
}

export default Routes;
