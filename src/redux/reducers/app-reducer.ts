import { IAppState } from './../../entities/App';
import { Reducer } from 'redux';

interface BaseAppActionType {
	type: string;
}

interface LangActionType extends BaseAppActionType {
	langId: number;
}

type AppActionType = LangActionType;

const SET_LANG = 'SET_LANG';
const TOGGLE_IS_DARK = 'TOGGLE_IS_DARK';

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
	isDark: false,
};

export const appReducer: Reducer<IAppState, AppActionType> = (
	state: IAppState = initialState,
	action: AppActionType,
): IAppState => {
	const { type, langId } = action;

	switch (type) {
	case SET_LANG:
		return { ...state, langId };
	case TOGGLE_IS_DARK:
		return { ...state, isDark: !state.isDark };
	default:
		return state;
	}
};

export const setLangAction = (langId: number): LangActionType => ({ langId, type: SET_LANG });
export const toggleIsDarkAction = (): BaseAppActionType => ({ type: TOGGLE_IS_DARK });
