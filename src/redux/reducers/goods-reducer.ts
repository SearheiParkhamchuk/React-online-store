import { Reducer } from 'redux';

export interface IItemOfGood {
	img: string;
	imgHover: string;
	cost: number;
	costBeforeDiscount?: number;
	description: string;
	title: string;
	stars: number;
	id: string;
}

interface IGoodsState {
	goods: IItemOfGood[];
}

interface BaseAppActionType {
	type: string;
}

interface SetGoodsActionType extends BaseAppActionType {
	goods: IItemOfGood[];
}

type AppActionType = SetGoodsActionType;

const SET_GOODS = 'SET_GOODS';

const initialState: IGoodsState = {
	goods: [
		{
			img: 'https://demo.kallyas.net/ares-furniture-interior-design/wp-content/uploads/sites/3/2013/06/kl-shop-p4-270x270_c.jpg',
			imgHover: 'https://demo.kallyas.net/ares-furniture-interior-design/wp-content/uploads/sites/3/2013/06/kl-shop-p41-270x270_c.jpg',
			cost: 18.52,
			costBeforeDiscount: 20.00,
			description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.',
			title: 'Adjustable Filling Cabinet',
			stars: 4.5,
			id: '1',
		},
		{
			img: 'https://demo.kallyas.net/ares-furniture-interior-design/wp-content/uploads/sites/3/2013/06/kl-shop-p4-270x270_c.jpg',
			imgHover: 'https://demo.kallyas.net/ares-furniture-interior-design/wp-content/uploads/sites/3/2013/06/kl-shop-p41-270x270_c.jpg',
			cost: 78.07,
			description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.',
			title: 'Adjustable Filling Cabinet',
			stars: 4.9,
			id: '2',
		},
		{
			img: 'https://demo.kallyas.net/ares-furniture-interior-design/wp-content/uploads/sites/3/2013/06/kl-shop-p4-270x270_c.jpg',
			imgHover: 'https://demo.kallyas.net/ares-furniture-interior-design/wp-content/uploads/sites/3/2013/06/kl-shop-p41-270x270_c.jpg',
			cost: 10.10,
			costBeforeDiscount: 20.00,
			description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.',
			title: 'Adjustable Filling Cabinet',
			stars: 4.5,
			id: '3',
		},
		{
			img: 'https://demo.kallyas.net/ares-furniture-interior-design/wp-content/uploads/sites/3/2013/06/kl-shop-p4-270x270_c.jpg',
			imgHover: 'https://demo.kallyas.net/ares-furniture-interior-design/wp-content/uploads/sites/3/2013/06/kl-shop-p41-270x270_c.jpg',
			cost: 15.00,
			description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.',
			title: 'Adjustable Filling Cabinet',
			stars: 3,
			id: '4',
		},
		{
			img: 'https://demo.kallyas.net/ares-furniture-interior-design/wp-content/uploads/sites/3/2013/06/kl-shop-p4-270x270_c.jpg',
			imgHover: 'https://demo.kallyas.net/ares-furniture-interior-design/wp-content/uploads/sites/3/2013/06/kl-shop-p41-270x270_c.jpg',
			cost: 13.00,
			description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.',
			title: 'Adjustable Filling Cabinet',
			stars: 5,
			id: '5',
		},
		{
			img: 'https://demo.kallyas.net/ares-furniture-interior-design/wp-content/uploads/sites/3/2013/06/kl-shop-p4-270x270_c.jpg',
			imgHover: 'https://demo.kallyas.net/ares-furniture-interior-design/wp-content/uploads/sites/3/2013/06/kl-shop-p41-270x270_c.jpg',
			cost: 14.00,
			costBeforeDiscount: 18.00,
			description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.',
			title: 'Adjustable Filling Cabinet',
			stars: 4,
			id: '6',
		},
	],
};

export const goodsReducer: Reducer<IGoodsState, AppActionType> = (
	state: IGoodsState = initialState,
	action: AppActionType,
): IGoodsState => {
	const { type, goods } = action;

	switch (type) {
	case SET_GOODS: {
		return {
			...state,
			goods: [...goods],
		};
	}
	default:
		return state;
	}
};

export const setGoodsAction =
	(goods: IItemOfGood[]): SetGoodsActionType =>
		({ goods, type: SET_GOODS });
