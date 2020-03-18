import React, { useState } from 'react';
import './index.scss';
import NavBar from '../../components/NavBar';
import MyFriends from '../../components/MyFriends';
import CreatePost from '../../components/CreatePost';
import NewFriends from '../../components/NewFriends';
import Post from '../../components/Post';
import Comment from '../../components/Comment';

const HomePage = () => {
	return (
		<div className='home-container'>
			<NavBar />
			<div className='home-wraper'>
				<div className='home-friend'>
					<MyFriends />
					<NewFriends />
				</div>
				<div className='home-posts'>
					<CreatePost />
					<Post />
					<Post />
					<Post />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
