import * as React from 'react';
import { NavLink } from 'react-router-dom';
import * as H from 'history';

interface IShopNavigationProps {
}

interface IMenuItem<S = H.LocationState> {
	id: string;
	name: string;
	sub?: IMenuItem[];
	type: string;
	to?: H.LocationDescriptor<S> | ((location: H.Location<S>) => H.LocationDescriptor<S>);
}

const MENU_TYPES = {
	ITEM: 'item',
	SUB: 'submenu',
	SEPARATOR: 'separator',
};

const menuItems = [
	{
		name: 'Living Room',
		id: 'living_room',
		to: '',
		type: MENU_TYPES.ITEM,
	},
	{
		name: 'Dinning Room',
		id: 'dinning_room',
		to: '',
		type: MENU_TYPES.ITEM,
	},
	{
		name: 'Bedroom',
		id: 'bedroom',
		to: '',
		type: MENU_TYPES.ITEM,
	},
	{
		name: 'Accent Chairs',
		id: 'accent_chairs',
		to: '',
		type: MENU_TYPES.ITEM,
	},
	{
		name: 'Accessories',
		id: 'accessories',
		to: '',
		type: MENU_TYPES.ITEM,
	},
	{
		name: 'Kids\' World',
		id: 'kids_world',
		to: '',
		type: MENU_TYPES.ITEM,
	},
	{
		name: 'Office',
		id: 'office',
		to: '',
		type: MENU_TYPES.ITEM,
	},
	{
		name: 'Mattresses',
		id: 'mattresses',
		to: '',
		type: MENU_TYPES.ITEM,
	},
	{
		name: '',
		id: 'separator',
		type: MENU_TYPES.SEPARATOR,
	},
	{
		name: 'ALL PAGES',
		id: 'all_pages',
		type: MENU_TYPES.SUB,
		sub: [],
	},
];

export const ShopNavigation: React.FC<IShopNavigationProps> = (props) => {
	const menuItemsJSX = menuItems.map((menuItem: IMenuItem) => {
		let newItem = null;

		switch (menuItem.type) {
		case MENU_TYPES.ITEM: {
			newItem = (
				<NavLink className='shop-menu-item__link' to={menuItem.to as any}>
					{menuItem.name}
				</NavLink>
			);
			break;
		}
		case MENU_TYPES.SEPARATOR: {
			newItem = <div className='shop-menu-item__separator'/>;
			break;
		}
		case MENU_TYPES.SUB: {
			newItem = <span className='shop-menu-item__sub'>{menuItem.name}</span>;
			break;
		}
		}
		return (<li className='shop-menu-item' key={menuItem.id}>{newItem}</li>);
	});
	return (
		<ul className='clear-list-styles clear-link-styles'>
			{menuItemsJSX}
		</ul>
	);
};
