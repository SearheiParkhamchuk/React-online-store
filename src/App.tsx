import * as  React from 'react';
import { BrowserRouter, withRouter } from 'react-router-dom';
import './index.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import { Provider, connect } from 'react-redux';
import store, { AppState } from './redux/store';
import { compose } from 'redux';
import { FooterContainer } from './components/Footer/FooterContainer';

class App extends React.Component {
	render () {
		return (
			<div className='wrapper'>
				<HeaderContainer />
				<div className='content'>sdsfgsdfg</div>
				<FooterContainer />
			</div>
		);
	}
}

const mapStateToProps = (state: AppState) => ({});

const AppContainer = compose(
	withRouter,
	connect(mapStateToProps, {}),
)(App) as any;

const NewApp = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</BrowserRouter>
	);
};

export default NewApp;
