import * as  React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

const App: React.FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<div className={`app-wrapper ${store.getState().app.isDark ? 'dark-theme' : ''}`}>
					<HeaderContainer />
				</div>
			</Provider>
		</BrowserRouter>
	);
};

export default App;
