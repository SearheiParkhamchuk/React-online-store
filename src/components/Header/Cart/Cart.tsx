import * as React from 'react';
import { CartIcon } from './CartIcon';
import { CartPopup } from './CartPopup/CartPopup';
import styles from './styles.module.css';

export interface IShortCartItem {
	img: string;
	title: string;
	cost: number;
	count: number;
	goodId: string;
}
interface ICartProps {
	goods: IShortCartItem[];
	goodsCount: number;
	subTotal: number;
	removeGoodFromCart: (goodId: string) => void;
}

export const Cart: React.FC<ICartProps> = (props) => {
	return (
		<div className={styles.cartContainer}>
			<CartIcon goodsCount={props.goodsCount} />
			<div className={styles.cartPopupContainer}>
				<CartPopup
					goods={props.goods}
					subTotal={props.subTotal}
					removeGoodFromCart={props.removeGoodFromCart}
				/>
			</div>
		</div>
	);
};
