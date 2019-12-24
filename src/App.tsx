import * as  React from 'react';
import { BrowserRouter, withRouter, RouteComponentProps } from 'react-router-dom';
import './index.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import { Provider, connect } from 'react-redux';
import store from './redux/store';
import { compose } from 'redux';

class App extends React.Component {
	render () {
		return (
			<BrowserRouter>
				<Provider store={store}>
					<HeaderContainer />
				</Provider>
			</BrowserRouter>
		);
	}
}

const AppContainer = compose(
	withRouter,
	connect(),
)(App);

const NewApp = (props: RouteComponentProps<any>) => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer {...props} />
			</Provider>
		</BrowserRouter>
	);
};

export default NewApp;
