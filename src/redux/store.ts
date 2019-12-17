import { combineReducers, createStore, applyMiddleware  } from 'redux';
import { appReducer } from './reducers/app-reducer';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './reducers/cart-reducer';
import { goodsReducer } from './reducers/goods-reducer';

const reducers = combineReducers({
	app: appReducer,
	cart: cartReducer,
	goods: goodsReducer,
	form: formReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware()));

export type AppState = ReturnType<typeof reducers>;
export default store;
