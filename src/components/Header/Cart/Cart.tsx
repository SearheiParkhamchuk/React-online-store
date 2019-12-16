import * as React from 'react';
import styles from './styles.module.css';

interface ICartProps {
	goodsCount: number;
}

export const Cart: React.FC<ICartProps> = (props) => {
	const { goodsCount = 0 } = props;
	return (
		<div className={`${styles.cartIconWrapper}`}>
			<span className={`fas fa-shopping-cart ${styles.cartIcon}`}/>
			<span className={`${styles.cartCount}`}>{goodsCount}</span>
		</div>
	);
};
