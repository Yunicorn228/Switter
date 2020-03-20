import React, { useState, useEffect } from 'react';
import './index.scss';
import Banner from '../../components/Banner';
import NavBar from '../../components/NavBar';
import Post from '../../components/Post';
import ProfileBox from '../../components/ProfileBox';
import FriendBox from '../../components/FriendBox';
import { withRouter } from 'react-router-dom';

const Profile = ({ match, user }) => {
	const pages = ['status', 'friends', 'profile'];
	let page = pages.includes(match.params.page) ? match.params.page : 'status';
	console.log(page);
	return (
		<div className='profile-wraper'>
			<Banner user={user} match={match} />
			{page === 'status' && <Post />}
			{page === 'profile' && <ProfileBox user={user} />}
			{page === 'friends' && <FriendBox user={user} />}
		</div>
	);
};

export default withRouter(Profile);
