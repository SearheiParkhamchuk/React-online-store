import * as  React from 'react';
import SocialNetworks from '../common/SocialNetworks/SocialNetworks';
import Navigation from './Navigation/Navigation';
import LocalizationContainer from './Localization/LocalizationContainer';
import Logo from './Logo/Logo';
import Search from './Search/Search';
import SearchContainer from './Search/SearchContainer';
import { Cart } from './Cart/Cart';

interface IHeaderProps {
	isDark: boolean;
}

const Header: React.FunctionComponent<IHeaderProps> = (props: IHeaderProps) => {
	const { isDark } = props;
	return (
		<>
			<SocialNetworks isShort={true} isDark={isDark} />
			<span>Need Help? Call 0900 800 900</span>
			<Navigation />
			<LocalizationContainer/>
			<Logo />
			<SearchContainer />
			<div>
				<button>Custom Furniture</button>
			</div>
			<Cart goodsCount={2} />
		</>
	);
};

export default Header;
