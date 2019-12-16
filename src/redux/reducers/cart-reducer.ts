import { IAppState } from './../../entities/App';
import { Reducer } from 'redux';

interface IItemOfGood {
	img: string;
	cost: number;
	description: string;
	name: string;
	id: string;
}

interface ICart {
	count: number;
	goodId: string;
}

interface ICartState {
	goods: ICart[];
}

interface BaseAppActionType {
	type: string;
}

interface AddGoodToCartActionType extends BaseAppActionType {
	id: string;
	count: number;
}

type AppActionType = AddGoodToCartActionType;

const ADD_GOOD_TO_CART = 'ADD_GOOD_TO_CART';

const initialState: ICartState = {
	goods: [
		{
			goodId: '1',
			count: 2,
		},
		{
			goodId: '2',
			count: 3,
		},
	],
};

export const cartReducer: Reducer<ICartState, AppActionType> = (
	state: ICartState = initialState,
	action: AppActionType,
): IAppState => {
	const { type, id, count } = action;

	switch (type) {
	case ADD_GOOD_TO_CART:
		return { ...state, langId };
	default:
		return state;
	}
};

export const addGoodToCartAction =
	(id: string, count: number = 1): AddGoodToCartActionType =>
		({ id, count, type: ADD_GOOD_TO_CART });
