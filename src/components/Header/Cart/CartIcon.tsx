import * as React from 'react';

interface ICartIconProps {
	goodsCount: number;
}

export const CartIcon: React.FC<ICartIconProps> = (props) => {
	const { goodsCount = 0 } = props;
	return (
		<div className='cart-icon'>
			<span className='fas fa-shopping-cart cart-icon__icon'/>
			<span className='cart-icon__counter'>{goodsCount}</span>
		</div>
	);
};
