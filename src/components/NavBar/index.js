import React, { useState, useRef, useEffect } from 'react';
import './index.scss';
import logo from '../../images/logo.svg';
import icon from '../../images/homepageicon.svg';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

const NavBar = ({ displayBox }) => {
	const [dropDown, setDropDown] = useState(false);
	const navDropDownElement = useRef(null);
	const navButtonElement = useRef(null);

	const handleDropClick = e => {
		if (
			navButtonElement.current !== e.target &&
			navDropDownElement.current !== e.target
		) {
			setDropDown(false);
		}
	};

	useEffect(() => {
		window.addEventListener('click', handleDropClick);
	}, []);

	const handleDropDown = () => {
		const newDropdown = !dropDown;
		setDropDown(newDropdown);
	};
	return (
		<div className='nav-container'>
			<div className='nav-list-wraper'>
				<img src={logo} alt='' />
				<ul>
					<li>
						<Link to='/home'>Home</Link>
					</li>
					<li>
						<Link to='/profile/friends'>Friends</Link>
					</li>
					<li>
						<Link to='/profile/status'>Profile</Link>
					</li>
				</ul>
			</div>

			<div
				ref={navButtonElement}
				onClick={() => handleDropDown()}
				className='nav-content-wraper'>
				<img ref={navButtonElement} src={icon} alt='' />
				<div ref={navButtonElement} className='nav-user-name'>
					Sheldon Yu
				</div>
			</div>
			<div
				ref={navDropDownElement}
				className={classnames('nav-drop-down', { displaydropdown: dropDown })}>
				<div className='nav-toprofile'>
					<Link to='/profile'>Profile</Link>
				</div>
				<div className='nav-tosetting'>
					<Link to='/setting'>Setting</Link>
				</div>
				<div className='nav-logoout'>
					<Link to={`/`}>Log Out</Link>
				</div>
			</div>
		</div>
	);
};

export default NavBar;