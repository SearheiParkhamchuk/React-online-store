export const required = (value: string) => {
	return (value && value.trim()) ? undefined : 'Field is required';
};
