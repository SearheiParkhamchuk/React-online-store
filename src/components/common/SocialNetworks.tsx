import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface ISocialNetworkItem {
	name: string;
	icon: string;
}

interface ISocialNetworksProps {
	isShort?: boolean;
}

const socialNetworks: ISocialNetworkItem[] = [
	{
		name: 'Facebook',
		icon: 'fab fa-facebook-f',
	},
	{
		name: 'Twitter',
		icon: 'fab fa-twitter',
	},
	{
		name: 'Pinterest',
		icon: 'fab fa-pinterest-p',
	},
	{
		name: 'Vk',
		icon: 'fab fa-vk',
	},
];

const SocialNetworks: React.FunctionComponent<ISocialNetworksProps> = ({ isShort }) => {

	const socialNetworksJSX = socialNetworks.map((item: ISocialNetworkItem) => {
		return (
			<li key={item.name} className={`social-networks-item ${isShort ? 'social-networks-item_line' : '' }`}>
				<NavLink to={''} title={isShort ? item.name : ''}>
					<i className={`${item.icon} social-networks-item__icon`}/>
				</NavLink>
			</li>
		);
	});

	return (
		<div>
			<ul className='social-networks clear-list-styles'>
				{socialNetworksJSX}
			</ul>
		</div>
	);
};

export default SocialNetworks;
