export interface IAppState {
	langId: number;
	langs: ILangItem[];
}

export interface ILangItem {
	icon: string;
	lang: string;
	id: number;
}
