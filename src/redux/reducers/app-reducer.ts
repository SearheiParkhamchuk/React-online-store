import { IAppState } from './../../entities/App';
import { Reducer } from 'redux';

interface BaseAppActionType {
	type: string;
}

interface AppActionType extends BaseAppActionType {
	langId: number;
}

const SET_LANG = 'SET_LANG';

const initialState: IAppState = {
	langId: 1,
	langs: [
		{
			icon: 'ru',
			lang: 'Russian',
			id: 1,
		},
		{
			icon: 'gb',
			lang: 'English',
			id: 2,
		},
		{
			icon: 'fr',
			lang: 'Francais',
			id: 3,
		},
		{
			icon: 'es',
			lang: 'Espanol',
			id: 4,
		},
	],
};

export const appReducer: Reducer<IAppState, AppActionType> = (
	state: IAppState = initialState,
	action: AppActionType,
): IAppState => {
	const { type, langId } = action;

	switch (type) {
	case SET_LANG:
		return { ...state, langId };
	default:
		return state;
	}
};

export const setLangAction = (langId: number): AppActionType => ({ langId, type: SET_LANG });
