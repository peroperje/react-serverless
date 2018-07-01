import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'rebass/emotion';

import Admin from './UI/view/Admin/index'

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <Admin/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
