import * as React from 'react';
import { connect } from 'react-redux';
import Search from './Search';

export interface ISearchContainerProps {}

export interface ISearchFromData {
	search: string;
}

class SearchContainer extends React.Component<ISearchContainerProps> {
	onSubmit = (formData: ISearchFromData) => {
		console.log(formData);
	}

	render() {
		return (
			<Search onSubmit={this.onSubmit}/>
		);
	}
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
