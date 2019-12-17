import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../redux/store';
import { ICart, removeGoodFromCartAction } from '../../../redux/reducers/cart-reducer';
import { Cart, IShortCartItem } from './Cart';
import { IItemOfGood } from './../../../redux/reducers/goods-reducer';

export interface ICartContainerProps {
	goodsCount: number;
	goods: IShortCartItem[];
	subTotal: number;
	removeGoodFromCart: (goodId: string) => void;
}

class CartContainer extends React.Component<ICartContainerProps> {
	public render() {
		return (
			<Cart
				goodsCount={this.props.goodsCount}
				goods={this.props.goods}
				subTotal={this.props.subTotal}
				removeGoodFromCart={this.props.removeGoodFromCart}
			/>
		);
	}
}

const mapState2Props = (state: AppState) => {
	const goods: IItemOfGood[] = state.goods.goods.filter((item: IItemOfGood) => {
		return state.cart.goods.some((cartItem: ICart) => cartItem.goodId === item.id);
	});
	const shortGoods: IShortCartItem[] = goods.map((item: IItemOfGood) => {
		const goodCount = state.cart.goods.find((cartItem: ICart) => cartItem.goodId === item.id);
		return {
			img: item.img,
			title: item.title,
			cost: item.cost,
			count: goodCount ? goodCount.count : 0,
			goodId: item.id,
		};
	});
	const subTotal: number = shortGoods.reduce((prev: number, currentValue: IShortCartItem) => {
		return prev + (currentValue.count * currentValue.cost);
	},                                         0);

	return {
		subTotal,
		goods: shortGoods,
		goodsCount: state.cart.goods
			.reduce((previousValue: number, currentValue: ICart) => previousValue + currentValue.count, 0),
	};
};

const mapDispatch2Props = {
	removeGoodFromCart: removeGoodFromCartAction,
};

export default connect(mapState2Props, mapDispatch2Props)(CartContainer);
