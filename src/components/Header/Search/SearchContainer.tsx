import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../redux/store';
import Search from './Search';

export interface ISearchContainerProps {
	isDark: boolean;
}

export interface ISearchFromData {
	search: string;
}

class SearchContainer extends React.Component<ISearchContainerProps> {
	onSubmit = (formData: ISearchFromData) => {
		console.log(formData);
	}

	render() {
		return (
			<div>
				<Search isDark={this.props.isDark} onSubmit={this.onSubmit}/>
			</div>
		);
	}
}

const mapStateToProps = (state: AppState) => ({
	isDark: state.app.isDark,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
