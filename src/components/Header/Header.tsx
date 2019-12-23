import * as  React from 'react';
import SocialNetworks from '../common/SocialNetworks/SocialNetworks';
import Navigation from './Navigation/Navigation';
import LocalizationContainer from './Localization/LocalizationContainer';
import Logo from './Logo/Logo';
import SearchContainer from './Search/SearchContainer';
import CartContainer from './Cart/CartContainer';
import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';

interface IHeaderProps {
	isDark: boolean;
}

const Header: React.FunctionComponent<IHeaderProps> = (props: IHeaderProps) => {
	const { isDark } = props;
	return (
		<>
			<div className={styles.firstRow}>
				<div className={styles.contactUsContainer}>
					<SocialNetworks isShort={true} isDark={isDark} />
					<span>Need Help? Call 0900 800 900</span>
				</div>
				<div className={styles.navContainer}>
					<Navigation />
					<LocalizationContainer/>
				</div>
			</div>
			<div className={styles.secondRow}>
				<Logo />
				<div className={styles.searchWrapper}>
					<SearchContainer />
				</div>
				<div>
					<div>
						<NavLink className={styles.customFurnitureButton} to={''}>Custom Furniture</NavLink>
					</div>
					<CartContainer />
				</div>
			</div>
		</>
	);
};

export default Header;
