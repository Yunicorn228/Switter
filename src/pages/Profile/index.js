import React, { useState, useEffect } from 'react';
import './index.scss';
import Banner from '../../components/Banner';
import NavBar from '../../components/NavBar';
import Post from '../../components/Post';
import ProfileBox from '../../components/ProfileBox';
import FriendBox from '../../components/FriendBox';

const Profile = ({ match }) => {
	const pages = ['status', 'friends', 'profile'];
	let page = pages.includes(match.params.page) ? match.params.page : 'status';
	return (
		<div className='profile-wraper'>
			<NavBar />
			<Banner match={match} />
			{page === 'status' && <Post />}
			{page === 'profile' && <ProfileBox />}
			{page === 'friends' && <FriendBox />}
		</div>
	);
};

export default Profile;
