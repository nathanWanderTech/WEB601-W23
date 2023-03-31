import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { ModifyContentFormComponent } from '../modify-content-form/modify-content-form.component';

@Component({
	selector: 'app-modify-content-component',
	templateUrl: './modify-content-component.component.html',
	styleUrls: ['./modify-content-component.component.scss'],
})
export class ModifyContentComponentComponent {
	constructor(private dialog: MatDialog) {}
	@Output() addNewContentEvent = new EventEmitter<Content>();

	openDialog() {
		const dialogConfig = new MatDialogConfig();

		const dialogRef = this.dialog.open(ModifyContentFormComponent, dialogConfig);
		dialogConfig.autoFocus = true;

		dialogRef.afterClosed().subscribe((data) => {
			const newContent: Content = {
				...data,
				imgURL:
					data.imgURL === '' || data.imgURL == null
						? 'https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png'
						: data.imgURL,
				tags: data.tags ? data.tags.split(',') : [],
			};
			console.log('Dialog output:', newContent);
			this.handleSave(newContent);
		});
	}

	handleSave(newContent: Content) {
		this.addNewContentEvent.emit(newContent);
	}
}
