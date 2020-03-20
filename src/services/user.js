import axios from 'axios';
import getApiURL from '../constants/apiUrl';

const url = getApiURL();

const getAllUser = () => {
	return axios.get(`${url}/users/fetch`);
};

const addFriend = () => {
	return axios.post(`${url}/users/friends/add`);
};

const deleteFriend = () => {
	return axios.post(`${url}/users/friends/remove`);
};

const findFriendById = id => {
	return axios.get(`${url}/users/friends/byId`, { params: { id } });
};

const findUserById = userId => {
	return axios.get(`${url}/users/find/byId`, { params: { userId } });
};

const findStrangerByUserId = () => {
	return axios.get(`${url}/users/strangers/byId`);
};

const searchFriendByUser = () => {
	return axios.get(`${url}/users/search/byUser`);
};

const profileUpdate = () => {
	return axios.post(`${url}/users/update/email`);
};

const UploadProfilePicture = file => {
	return axios.post(`${url}/users/images`, file);
};

const userService = {
	getAllUser,
	addFriend,
	deleteFriend,
	findFriendById,
	findUserById,
	findStrangerByUserId,
	searchFriendByUser,
	profileUpdate,
	UploadProfilePicture,
};

export default userService;
