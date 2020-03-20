import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogInPage from './pages/LogIn';
import HomePage from './pages/Home';
import Profile from './pages/Profile';
import Setting from './pages/Setting';
import userService from './services/user';
import NavBar from './components/NavBar';

function App() {
	const [user, setUser] = useState({});
	console.log(user);

	useEffect(() => {
		const fetchUser = async () => {
			const userId = window.localStorage.getItem('userId'); // get data from local storage
			if (userId) {
				try {
					const response = await userService.findUserById(userId); // get full user data from server
					console.log(response);
					if (response.data.success) {
						setUser(response.data.data);
					}
				} catch (error) {
					alert(error.message);
				}
			}
		};
		fetchUser();
	}, []);

	return (
		<Router>
			<div className='App'>
				<NavBar user={user} />
				<Route exact path='/' component={LogInPage} />
				<Route
					exact
					path='/home'
					render={() => {
						return <HomePage />;
					}}
				/>
				<Route exact path='/profile/:page' component={Profile} />
				<Route exact path='/profile' component={Profile} />
				<Route exact path='/setting' component={Setting} />
			</div>
		</Router>
	);
}

export default App;
