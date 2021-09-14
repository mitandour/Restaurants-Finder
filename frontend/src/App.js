import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from 'react';
import Homepage from './views/Homepage';
import { NotFoundPage } from './views/NotFoundPage';
import { Helmet } from 'react-helmet'

const TITLE = 'Restaurant Finder'
function App() {
  return (
    <>
    <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
    <div>
      {/* Specifies components to handle specific routes */}
      <Router>
          <Switch>
            {/* Paths can contain parameters, for example, path="/:location?/:cuisine?",
            which are delivered to the target component through react props. */}
            <Route exact path='/:city?/:cuisine?' component={Homepage} />
            {/* for not found pages */}
            <Route component={NotFoundPage} />
          </Switch>
      </Router>
      </div>
    </>
  );
}

export default App;
