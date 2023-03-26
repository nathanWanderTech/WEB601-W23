import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
	selector: 'app-modify-content-component',
	templateUrl: './modify-content-component.component.html',
	styleUrls: ['./modify-content-component.component.scss'],
})
export class ModifyContentComponentComponent {
	@Output() addNewContentEvent = new EventEmitter<Content>();

	id: number | null = null;
	title: string | null = null;
	description: string | null = null;
	creator: string | null = null;
	imgURL: string | null = null;
	type: string | null = null;
	tags: string | null = null;

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
			title: this.title,
			description: this.description,
			creator: this.creator,
			imgURL: this.imgURL,
			type: this.type,
			tags: this.tags ? this.tags.split(',') : [],
		};
		this.addNewContentEvent.emit(newContent);
		this.resetForm();
	}
}
