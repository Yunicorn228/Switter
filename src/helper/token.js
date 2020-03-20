import AuthenticationService from '../services/authentication';

const saveTokenToBrowser = async (token, userId) => {
	window.localStorage.setItem('token', token);
	window.localStorage.setItem('userId', userId);
	//save the token to browser
};

export const handleSignout = () => {
	window.localStorage.removeItem('token');
	window.localStorage.removeItem('userId');
	//remove the token from the browser
};

export default saveTokenToBrowser;
