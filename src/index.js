import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import './assets/css/main.css';
import './assets/css/bootstrap4.min.css';
import './assets/css/style.css';
import 'react-quill/dist/quill.snow.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
    <Router>
        <Switch>
            <Route path={"/"} component={Routes}/>
        </Switch>
    </Router>
    , document.getElementById('root'));
