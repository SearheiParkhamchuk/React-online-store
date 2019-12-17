import * as React from 'react';
import styles from './styles.module.css';

interface ICartItemProps {
	img: string;
	title: string;
	cost: number;
	count: number;
	goodId: string;
	removeGoodFromCart: (goodId: string) => void;
}

export const CartItem: React.FC<ICartItemProps> = (props) => {
	return (
		<div className={`${styles.itemWrapper}`}>
			<div className={`${styles.itemImage}`}>
				<img src={props.img} alt={props.title}/>
			</div>
			<div className={`${styles.info}`}>
				<p className={`${styles.title}`}>
					<a href='#'>{props.title}</a>
				</p>
				<div className={`${styles.cost}`}>
					{`${props.count} * $${props.cost}`}
				</div>
			</div>
			<span
				onClick={() => { props.removeGoodFromCart(props.goodId); }}
				className={`fas fa-times ${styles.removeBtn}`}
			/>
		</div>
	);
};
