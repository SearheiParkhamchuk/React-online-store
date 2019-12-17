import { Reducer } from 'redux';

export interface ICart {
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
	goodId: string;
	count: number;
}

interface RemoveGoodFromCartActionType extends BaseAppActionType {
	goodId: string;
}

type AppActionType = AddGoodToCartActionType & RemoveGoodFromCartActionType;

const ADD_GOOD_TO_CART = 'ADD_GOOD_TO_CART';
const REMOVE_GOOD_FROM_CART = 'REMOVE_GOOD_FROM_CART';

const initialState: ICartState = {
	goods: [
		{
			goodId: '1',
			count: 2,
		},
		{
			goodId: '2',
			count: 4,
		},
	],
};

export const cartReducer: Reducer<ICartState, AppActionType> = (
	state: ICartState = initialState,
	action: AppActionType,
): ICartState => {
	const { type, goodId, count } = action;

	switch (type) {
	case ADD_GOOD_TO_CART: {
		const isGoodExists: boolean = state.goods.some((obj: ICart) => obj.goodId === goodId);
		return {
			...state,
			goods: isGoodExists ? state.goods.map((good: ICart) =>  {
				return good.goodId === goodId ? { ...good, count: good.count + count } : good;
			}) : [...state.goods, { goodId, count }],
		};
	}
	case REMOVE_GOOD_FROM_CART:
		return {
			...state,
			goods: state.goods.filter((good: ICart) => good.goodId !== goodId),
		};
	default:
		return state;
	}
};

export const addGoodToCartAction =
	(goodId: string, count: number = 1): AddGoodToCartActionType =>
		({ goodId, count, type: ADD_GOOD_TO_CART });

export const removeGoodFromCartAction =
	(goodId: string): RemoveGoodFromCartActionType =>
		({ goodId, type: REMOVE_GOOD_FROM_CART });
