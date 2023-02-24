import { Component, Output, EventEmitter } from '@angular/core';
import { validateCreateNewContent } from 'src/utils/validation';

import { Content } from '../helper-files/content-interface';

@Component({
	selector: 'app-create-content',
	templateUrl: './create-content.component.html',
	styleUrls: ['./create-content.component.scss'],
})
export class CreateContentComponent {
	@Output() addNewContentEvent = new EventEmitter<Content>();

	id: number | null = null;
	title: string | null = null;
	description: string | null = null;
	creator: string | null = null;
	imgURL: string | null = null;
	type: string | null = null;
	tags: string | null = null;

	errorMessage?: string;

	resetForm() {
		this.id = null;
		this.title = null;
		this.description = null;
		this.creator = null;
		this.imgURL = null;
		this.type = null;
		this.tags = null;
	}

	handleSubmit() {
		const newContent: any = {
			id: this.id,
			title: this.title,
			description: this.description,
			creator: this.creator,
			imgURL: this.imgURL,
			type: this.type,
			tags: this.tags ? this.tags.split(',') : [],
		};

		const promiseRequest = new Promise<Content>((success, fail) => {
			const error = validateCreateNewContent(newContent);
			if (error.isError) fail(error);
			else success(newContent);
		});

		promiseRequest
			.then((res) => {
				console.log('Addition is successful: ', res);
				this.addNewContentEvent.emit(res);
				this.resetForm();
			})
			.catch((err) => {
				this.errorMessage = err.message;
				console.error(err);
			});
	}
}
