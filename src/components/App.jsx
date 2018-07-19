import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderNavbar from './HeaderNavbar';
import QaSearchPage from './qa/serach/SearchPage';
import QaAddPage from './qa/add/AddPage';
import QaDetailPage from './qa/detail/DetailPage';
import UserLoginPage from './user/login/LoginPage';

const App = () => (
    <Router>
        <div>
            <HeaderNavbar />
            <Switch>
                <Route extra path="/qa/search" component={QaSearchPage} />
                <Route extra path="/qa/add/:action" component={QaAddPage} />
                <Route extra path="/qa/detail" component={QaDetailPage} />
                <Route extra path="/user/login" component={UserLoginPage} />
            </Switch>
        </div>
    </Router>
);

export default App;
