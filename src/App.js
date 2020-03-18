import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogInPage from './pages/LogIn';
import HomePage from './pages/Home';
import Profile from './pages/Profile';
import Setting from './pages/Setting';

function App() {
	return (
		<Router>
			<div className='App'>
				<Route exact path='/' component={LogInPage} />
				<Route exact path='/home' component={HomePage} />
				<Route exact path='/profile/:page' component={Profile} />
				<Route exact path='/profile' component={Profile} />
				<Route exact path='/setting' component={Setting} />
			</div>
		</Router>
	);
}

export default App;
