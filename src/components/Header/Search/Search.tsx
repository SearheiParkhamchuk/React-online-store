import * as React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { ISearchFromData } from './SearchContainer';

export interface ISearchProps {
}

type Search = React.FunctionComponent<
	InjectedFormProps<ISearchFromData, ISearchProps> & ISearchProps
>;

const Search: Search = (props) => {
	const { handleSubmit } = props;
	return (
		<div className='search'>
			<form>
				<span className='fas fa-search search__icon' onClick={handleSubmit}/>
				<Field
					component={'input'}
					name='search'
					placeholder='Search...'
					className='search__field'
				/>
			</form>
		</div>
	);
};

export default reduxForm<ISearchFromData, ISearchProps>({ form: 'search' })(Search);
