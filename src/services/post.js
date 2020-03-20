import axios from 'axios';
import getApiURL from '../constants/apiUrl';

const url = getApiURL();

const fetchAllPost = () => {
	return axios.get(`${url}/posts/fetch`);
};

const createPost = (text, mood, authorId) => {
	return axios.post(`${url}/posts/create`, { text, mood, authorId });
};

const createCommentInPost = () => {
	return axios.post(`${url}/posts/comment/create`);
};

const likeComment = () => {
	return axios.post(`${url}/posts/comment/like`);
};

const likePost = () => {
	return axios.post(`${url}/posts/like`);
};

const unlikePost = () => {
	return axios.post(`${url}/posts/comment/unlike`);
};

const findPostById = () => {
	return axios.get(`${url}/posts/find/byId`);
};

const findPostByUser = () => {
	return axios.get(`${url}/posts/find/byUser`);
};

const findPostByFriend = () => {
	return axios.get(`${url}/posts/find/byFriends`);
};

const reportPost = () => {
	return axios.post(`${url}/posts/report`);
};

const unreportPost = () => {
	return axios.post(`${url}/posts/unReport`);
};

const postService = {
	fetchAllPost,
	createPost,
	createCommentInPost,
	likeComment,
	likePost,
	unlikePost,
	findPostById,
	findPostByUser,
	findPostByFriend,
	reportPost,
	unreportPost,
};

export default postService;
