import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Layout from './components/pages/layout';
import NotFound from './components/pages/404';

const routing = (
	<Router>
		<Switch>
			<Route path='/' component={App} />
			<Route path='/gallery/:page' component={Layout} />
			<Route component={NotFound} />
		</Switch>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));
