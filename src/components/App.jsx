import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderNavbar from './HeaderNavbar';
import QaSearchPage from './qa/serach/SearchPage';
import QaAddPage from './qa/add/AddPage';

const App = () => (
    <Router>
        <div>
            <HeaderNavbar />
            <Switch>
                <Route extra path="/qa/search" component={QaSearchPage} />
                <Route extra path="/qa/add" component={QaAddPage} />
            </Switch>
        </div>
    </Router>
);

export default App;
