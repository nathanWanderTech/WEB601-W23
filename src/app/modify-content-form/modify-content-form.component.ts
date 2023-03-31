import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';

@Component({
	selector: 'app-modify-content-form',
	templateUrl: './modify-content-form.component.html',
	styleUrls: ['./modify-content-form.component.scss'],
})
export class ModifyContentFormComponent implements OnInit {
	form: FormGroup;

	constructor(
		private fb: FormBuilder,
		private dialogRef: MatDialogRef<ModifyContentFormComponent>,
		@Inject(MAT_DIALOG_DATA) public data: Content
	) {
		this.form = this.fb.group({});
	}

	ngOnInit() {
		this.form = this.fb.group({
			title: '',
			description: '',
			creator: '',
			imgURL: '',
			type: '',
			tags: '',
		});
	}

	save() {
		this.dialogRef.close(this.form.value);
	}

	close() {
		this.dialogRef.close();
	}
}
