import * as React from 'react';
import { IShortCartItem } from '../Cart';
import { CartItem } from '../CartItem/CartItem';
import styles from './styles.module.css';
import LineSeparator from '../../../common/LineSeparator';

interface ICartPopupProps {
	subTotal: number;
	goods: IShortCartItem[];
	// viewCart: () => void;
	// checkout: () => void;
	removeGoodFromCart: (goodId: string) => void;
}

export const CartPopup: React.FC<ICartPopupProps> = (props) => {
	const items = props.goods.map((item: IShortCartItem) => {
		return (
			<div className={styles.itemWrapper} key={item.goodId}>
				<CartItem
					{...item}
					removeGoodFromCart={props.removeGoodFromCart}
				/>
			</div>
		);
	});

	return (
		<div className={`${styles.popupContainer}`}>
			{
				items.length === 0 ?
				<div>No products in the cart</div> :
				(
					<>
						<div>
							{items}
						</div>
						<LineSeparator isColoring={false}/>
						<div className={styles.subTotal}>
							<span className={styles.subTotalTitle}>Subtotal:</span>
							<span className={styles.subTotalNumber}>
								${props.subTotal}
							</span>
						</div>
						<LineSeparator isColoring={false}/>
						<div className={styles.buttons}>
							<span className={`${styles.viewCartButton} ${styles.button}`}>
								<a href='#'>View Cart</a>
							</span>
							<span className={`${styles.checkoutButton} ${styles.button}`}>
								<a href='#'>Checkout</a>
							</span>
						</div>
					</>
				)
			}
		</div>
	);
};
