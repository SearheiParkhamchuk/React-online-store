export interface IAppState {
	langId: number;
	langs: ILangItem[];
	isDark: boolean;
}

export interface ILangItem {
	icon: string;
	lang: string;
	id: number;
}
