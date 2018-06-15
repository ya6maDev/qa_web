import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderNavbar from './HeaderNavbar';
import QaSearchPage from './qa/serach/SearchPage';
import QaAddPage from './qa/add/AddPage';
import QaDetailPage from './qa/detail/DetailPage';

const App = () => (
    <Router>
        <div>
            <HeaderNavbar />
            <Switch>
                <Route extra path="/qa/search" component={QaSearchPage} />
                <Route extra path="/qa/add" component={QaAddPage} />
                <Route extra path="/qa/detail" component={QaDetailPage} />
            </Switch>
        </div>
    </Router>
);

export default App;
