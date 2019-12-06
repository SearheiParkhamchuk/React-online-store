import * as  React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

interface IHeaderState {}
interface IHeaderProps {}

const mapStateToProps = () => ({});
const mapDispatchToProps = {};

type Props = IHeaderProps;

class HeaderContainer extends React.Component<Props, IHeaderState> {
	public render() {
		return <div><Header {...this.props}/></div>;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
