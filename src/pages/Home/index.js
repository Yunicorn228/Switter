import React, { useState } from 'react';
import './index.scss';
import NavBar from '../../components/NavBar';
import MyFriends from '../../components/MyFriends';
import CreatePost from '../../components/CreatePost';
import NewFriends from '../../components/NewFriends';
import Post from '../../components/Post';
import Comment from '../../components/Comment';

const HomePage = ({ user }) => {
	console.log(user);
	return (
		<div className='home-container'>
			<div className='home-wraper'>
				<div className='home-friend'>
					<MyFriends user={user} />
					<NewFriends />
				</div>
				<div className='home-posts'>
					<CreatePost user={user} />
					<Post />
					<Post />
					<Post />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
