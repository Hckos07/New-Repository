import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './assets/Components/Home';
import PrivacyPolicy from './assets/Components/privacypolicy';
import TermsAndConditions from './assets/Components/TandC';
import Tdl from './assets/Components/tdl';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/terms-and-conditions" component={TermsAndConditions} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-use" component={Tdl} />
      </Switch>
    </Router>
  );
};

export default App;