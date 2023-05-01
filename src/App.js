import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import Aboutme from './AboutMe';
import Contact from './Contact';
import React from 'react';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/aboutme">
            <Aboutme />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;