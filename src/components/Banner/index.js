import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import icon from '../../images/profileicon.svg';
import Name from '../../helper/name';

const navLinks = [
	{
		title: 'Status',
		link: '/profile/status',
	},
	{
		title: 'Profile',
		link: '/profile/profile',
	},
	{
		title: 'Friends',
		link: '/profile/friends',
	},
];
const Banner = ({ match, user }) => {
	return (
		<div className='banner-container'>
			<div className='banner-content'>
				<img src={user.avatar} alt='' />
				<div className='banner-links-container'>
					<h1>
						{user.firstName && Name.capitalizeName(user.firstName)}
						{` `}
						{user.lastName && Name.capitalizeName(user.lastName)}
					</h1>
					<ul>
						{navLinks.map(v => (
							<li>
								<Link
									className={classnames({
										active: match.params.page === v.link.split('/')[2],
									})}
									to={v.link}>
									{v.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Banner;
