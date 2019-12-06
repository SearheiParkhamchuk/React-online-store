import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import { routes } from './../../../constants/routes';

const Navigation: React.FunctionComponent = () => {
	return (
		<div>
			<ul className={`clear-list-styles ${styles.listItems} ${styles.navLeft}`}>
				<li>
					<NavLink to={routes.MY_ACCOUNT} className=''>My Account</NavLink>
				</li>
				<li>
					<span className=''>|</span>
				</li>
				<li>
					<NavLink to={routes.BLOG} className=''>Blog</NavLink>
				</li>
				<li>
					<NavLink to={routes.SUPPORT} className=''>Support</NavLink>
				</li>
			</ul>
			<ul className={`clear-list-styles ${styles.listItems} ${styles.navRight}`}>
				<li>
					<NavLink to={''} className=''>Company</NavLink>
				</li>
				<li>
					<NavLink to={''} className=''>Login</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
