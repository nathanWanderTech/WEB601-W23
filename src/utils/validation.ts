import { Error } from 'src/app/helper-files/error-interface';

export const validateCreateNewContent = (item: any): Error => {
	const error: Error = { isError: false, message: '' };

	if (!item.id || typeof item.id !== 'number' || item.id == '' || item.id <= 0) {
		error.isError = true;
		error.message = 'ID must be a number greater than 0';
	} else if (!item.title || item.title === '') {
		error.isError = true;
		error.message = 'Title cannot be empty';
	} else if (!item.description || item.description === '') {
		error.isError = true;
		error.message = 'Description cannot be empty';
	} else if (!item.creator || item.creator === '') {
		error.isError = true;
		error.message = 'Creator cannot be empty';
	}

	return error;
};
