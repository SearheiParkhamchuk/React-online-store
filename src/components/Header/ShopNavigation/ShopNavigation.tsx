import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface IShopNavigationProps {
}

export const ShopNavigation: React.FC<IShopNavigationProps> = (props) => {
	return (
		<ul>
			<li>
				<NavLink to={''}>Living Room</NavLink>
			</li>
			<li>
				<NavLink to={''}>Dinning Room</NavLink>
			</li>
			<li>
				<NavLink to={''}>Bedroom</NavLink>
			</li>
			<li>
				<NavLink to={''}>Accent Chairs</NavLink>
			</li>
			<li>
				<NavLink to={''}>Accessories</NavLink>
			</li>
			<li>
				<NavLink to={''}>Kids' World</NavLink>
			</li>
			<li>
				<NavLink to={''}>Office</NavLink>
			</li>
			<li>
				<NavLink to={''}>Mattresses</NavLink>
			</li>
			<li>
				<span></span>
			</li>
			<li>ALL PAGES</li>
		</ul>
	);
};
