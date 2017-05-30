import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import BigViewPage from './components/BigViewPage.jsx';
import App from './components/App.jsx';

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
    	<Route path="/BigViewPage" component={BigViewPage}/>
	< /Router>
	), document.getElementById('root'));