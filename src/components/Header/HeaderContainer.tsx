import * as  React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { AppState } from '../../redux/store';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

interface IHeaderState {}
interface IHeaderProps {
	isDark: boolean;
}

const mapStateToProps = (state: AppState) => ({
	isDark: state.app.isDark,
});
const mapDispatchToProps = {};

type Props = IHeaderProps;

class HeaderContainer extends React.Component<Props, IHeaderState> {
	constructor(props: IHeaderProps) {
		super(props);

		this.state = {
			isHeaderPositionAbsolute: true,
		};
	}
	public render() {
		return (
			<header className={`header-wrapper ${this.props.isDark ? 'dark-theme' : ''}`}>
				<div className='header-inner'>
					<Header {...this.props}/>
				</div>
			</header>
		);
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
)(HeaderContainer);
