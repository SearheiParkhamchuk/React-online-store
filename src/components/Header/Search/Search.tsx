import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import styles from './styles.module.css';
import { ISearchFromData } from './SearchContainer';

export interface ISearchProps {
	isDark: boolean;
}

type Search = React.FunctionComponent<InjectedFormProps<ISearchFromData, ISearchProps> & ISearchProps>;

const Search: Search = (props) => {
	const { isDark, handleSubmit } = props;
	return (
		<div className={`${styles.searchContainer}`}>
			<form>
				<span className={`fas fa-search ${styles.searchIcon}`} onClick={handleSubmit}/>
				<Field
					component={'input'}
					name='search'
					placeholder='Search...'
					className={`${styles.searchField} ${isDark ? styles.dark : styles.light}`}
				/>
			</form>
		</div>
	);
};

export default reduxForm<ISearchFromData, ISearchProps>({ form: 'search' })(Search);
