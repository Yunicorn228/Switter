import React from 'react';
import classnames from 'classnames';
import './index.scss';
import { Link } from 'react-router-dom';

const SignIn = ({ handleDisplayCode, displayCode }) => {
	return (
		<div
			className={classnames('signin-container', {
				active: displayCode === 3,
				//3就是代表他妈的signin
			})}>
			<div className='big-title'>Switter</div>
			<div className='signin-wrapper'>
				<div className='small-title'>sign In</div>
				<input placeholder='Enter your phone number' type='text' />
				<input placeholder='Enter your pass word' type='password' />
				<div className='signin-password'>
					<input type='checkbox' />
					<div>remember password</div>
				</div>

				<Link to={`/home`}>
					<button className='bf-blue-button'>Log In</button>
				</Link>

				<div onClick={() => handleDisplayCode(1)} className='signin-noaccount'>
					Don’t have an account? Register for one now.
				</div>
			</div>
		</div>
	);
};

export default SignIn;
