import * as React from 'react';
import styles from './styles.module.css';

interface ISocialNetworkItem {
	name: string;
	icon: string;
}

interface ISocialNetworksProps {
	isDark?: boolean;
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

const SocialNetworks: React.FunctionComponent<ISocialNetworksProps> = ({ isDark, isShort }) => {

	const socialNetworksJSX = socialNetworks.map((item: ISocialNetworkItem) => {
		return (
			<li key={item.name} className={styles.listItem}>
				<a href='' title={isShort ? item.name : ''}>
					<i className={`${item.icon} ${styles.icon}`}/>
				</a>
			</li>
		);
	});

	return (
		<div>
			<ul className={`${isShort ? styles.line : ''} ${isDark ? styles.dark : styles.light} clear-list-styles`}>
				{socialNetworksJSX}
			</ul>
		</div>
	);
};

export default SocialNetworks;
