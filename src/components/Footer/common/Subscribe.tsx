import * as React from 'react';
import { Field, reduxForm, InjectedFormProps, WrappedFieldProps } from 'redux-form';
import { connect } from 'react-redux';
import { required } from '../../../helpers/validators';

interface ISubscribeProps {}
interface ISubscribe {
	subscribe: string;
}

interface IFieldProps {
	placeholder?: string;
}

const subscribeField = (props: WrappedFieldProps & IFieldProps) => {
	const { input, placeholder, meta: { touched, error } } = props;
	return (
		<div className='subscribe-input subscribe__field'>
			<input
				{...input}
				className='subscribe-input__input'
				placeholder={placeholder}
				type='text'
			/>
			{
				touched &&
				(
					<div className='subscribe-input__message'>
						{error}
					</div>
				)
			}
		</div>
	);
};

const SubscribeForm: React.FC<InjectedFormProps<ISubscribe> & ISubscribeProps> = (props) => {
	const { handleSubmit } = props;
	return (
		<form className='subscribe' onSubmit={handleSubmit}>
			<Field
				name='subscribe'
				component={subscribeField}
				placeholder='your.adress@email.com'
				validate={[required]}
			/>
			<div>
				<button className='subscribe__button'>
					Subscribe
				</button>
			</div>
		</form>
	);
};

const SubscribeReduxForm =
	reduxForm<ISubscribe, ISubscribeProps>({ form: 'subscribe' })(SubscribeForm);

/// TOD Replace 'any' type
const Subscribe = (props: any) => {
	const onSubmit = (formData: ISubscribe) => {
		// props.subscribe(formData);
	};

	return (
		<SubscribeReduxForm onSubmit={onSubmit} />
	);
};

const mapStateToProps = (state: any) => {};

export default connect(mapStateToProps, {})(Subscribe);
