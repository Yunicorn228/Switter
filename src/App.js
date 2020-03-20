import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogInPage from './pages/LogIn';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import SettingPage from './pages/Setting';
import userService from './services/user';
import NavBar from './components/NavBar';
import postService from './services/post';

function App() {
	const [user, setUser] = useState({});
	const [postData, setPostData] = useState([]);

	useEffect(() => {
		const fetchUser = async () => {
			const userId = window.localStorage.getItem('userId'); // get data from local storage
			if (userId) {
				try {
					const response = await userService.findUserById(userId); // get full user data from server
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

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const posts = await postService.fetchAllPost();
				if (posts) {
					setPostData(posts.data);
				}
			} catch (error) {
				alert(error.message);
			}
		};
		fetchPost();
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
						return (
							<HomePage
								postData={postData}
								setPostData={setPostData}
								user={user}
							/>
						);
					}}
				/>
				<Route
					exact
					path='/profile/:page'
					render={() => {
						return <ProfilePage user={user} />;
					}}
				/>
				<Route
					exact
					path='/profile'
					render={() => {
						return <ProfilePage user={user} />;
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
