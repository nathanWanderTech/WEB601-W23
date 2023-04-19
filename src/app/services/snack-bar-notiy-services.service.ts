import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
	providedIn: 'root',
})
export class SnackBarNotiyServicesService {
	constructor(private _snackBar: MatSnackBar) {}

	openSnackBar(message: string, action: string, onAction?: any) {
		const snackBarRef = this._snackBar.open(message, action);
		snackBarRef.onAction().subscribe(() => {
			if (onAction) onAction();
		});
	}
}
