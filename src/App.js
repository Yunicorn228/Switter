import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogInPage from './pages/LogIn';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import SettingPage from './pages/Setting';
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
				<Route
					exact
					path='/'
					render={() => {
						return <LogInPage />;
					}}
				/>
				<Route
					exact
					path='/home'
					render={() => {
						return <HomePage user={user} />;
					}}
				/>
				<Route
					exact
					path='/profile/:page'
					render={() => {
						return <ProfilePage />;
					}}
				/>
				<Route
					exact
					path='/profile'
					render={() => {
						return <ProfilePage />;
					}}
				/>
				<Route
					exact
					path='/setting'
					render={() => {
						return <SettingPage />;
					}}
				/>
			</div>
		</Router>
	);
}

export default App;
