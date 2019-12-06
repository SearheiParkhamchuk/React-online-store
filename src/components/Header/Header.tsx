import * as  React from 'react';
import SocialNetworks from '../common/SocialNetworks/SocialNetworks';
import Navigation from './Navigation/Navigation';
import LocalizationContainer from './Localization/LocalizationContainer';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props: IHeaderProps) => {
	const changeLang = (): void => {
		alert('change');
	};
	return (
		<>
			<SocialNetworks isShort={true} isDark={true} />
			<span>Need Help? Call 0900 800 900</span>
			<Navigation />
			<LocalizationContainer/>
			
		</>
	);
};

export default Header;
