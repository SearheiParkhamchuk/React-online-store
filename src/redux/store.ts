import { combineReducers, createStore } from 'redux';
import { appReducer } from './reducers/app-reducer';

const reducers = combineReducers({
	app: appReducer,
});
const store = createStore(reducers);

export type AppState = ReturnType<typeof reducers>;
export default store;
