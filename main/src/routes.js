import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './components/App';
import Home from './components/Home';
import About from './components/About';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App}/>

            </Switch>

        </BrowserRouter>
    );
};

export default Routes;