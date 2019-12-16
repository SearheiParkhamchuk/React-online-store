import * as  React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { AppState } from '../../redux/store';

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
	public render() {
		return <div><Header {...this.props}/></div>;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
