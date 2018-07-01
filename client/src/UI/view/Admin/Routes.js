import React from 'react';
import {Switch,Route} from 'react-router-dom'

import PageList from './Page/PageList'
import PageAdd from './Page/PageAdd'
import PageEdit from './Page/PageEdit'
import PageItem from './Page/PageEdit'

const routDefinition = [
  {
    exact: true,
    path:"/",

  },{
    exact: true,
    path:"/odbornici",
    pageProps:{
      entry:'Odbornici',

    }

  },{
    exact: true,
    path:"/saziv-skupstine",
    pageProps:{
      entry:'Saziv Skupstine',

    }

  },{
    exact: true,
    path:"/sednica-skupstine",
    pageProps:{
      entry:'Sednica Skupstine',

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
          ({pageProps,...route},index) => {
            return [
              <Route
                    key={`${index}-list`}
                    {...route}
                    render={
                        (props) => {
                          return <PageList {...props} {...pageProps}  />
                        }
                    }
              />,
              <Route
                    key={`${index}-add`}
                    {...{...route,...{path:`${route.path}/add`}}}
                    render={
                        (props) => {
                          return <PageAdd {...props} {...pageProps} />
                        }
                    }
              />,
              <Route
                    key={`${index}-edit`}
                    {...{...route,...{path:`${route.path}/:id/edit`}}}
                    render={
                        (props) => {
                          return <PageEdit {...props} {...pageProps} />
                        }
                    }
              />,
              <Route
                    key={`${index}-item`}
                    {...{...route,...{path:`${route.path}/:id`}}}
                    render={
                        (props) => {
                          return <PageItem {...props} {...pageProps} />
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
