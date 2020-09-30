//
//

import React from 'react';
import Home from './pages/Home';

// import SearchPage from './pages/SearchPage';

import './styles/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/search'>
            <h1>This is the search page</h1>
            {/* <SearchPage /> */}
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
