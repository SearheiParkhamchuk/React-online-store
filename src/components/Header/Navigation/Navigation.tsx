import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from './../../../constants/routes';

const Navigation: React.FunctionComponent = () => {
	return (
		<nav className='top-nav'>
			<div className='top-nav__left'>
				<ul className='clear-list-styles'>
					<li className='top-nav-item'>
						<NavLink to={routes.MY_ACCOUNT} className='top-nav-item__link'>My Account</NavLink>
					</li>
					<li className='top-nav-item'>
						<span className='top-nav-item__separator'>|</span>
					</li>
					<li className='top-nav-item'>
						<NavLink to={routes.BLOG} className='top-nav-item__link'>Blog</NavLink>
					</li>
					<li className='top-nav-item'>
						<NavLink to={routes.SUPPORT} className='top-nav-item__link'>Support</NavLink>
					</li>
				</ul>
			</div>
			<div className='top-nav__right'>
				<ul className='clear-list-styles'>
					<li className='top-nav-item'>
						<NavLink to={''} className='top-nav-item__link'>Company</NavLink>
					</li>
					<li className='top-nav-item'>
						<NavLink to={''} className='top-nav-item__link'>Login</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
