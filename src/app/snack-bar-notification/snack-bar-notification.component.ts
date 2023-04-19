import { Component, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { SnackBarNotiyServicesService } from '../services/snack-bar-notiy-services.service';

@Component({
	selector: 'app-snack-bar-notification',
	templateUrl: './snack-bar-notification.component.html',
	styleUrls: ['./snack-bar-notification.component.scss'],
})
export class SnackBarNotificationComponent {
	constructor(private snackBarService: SnackBarNotiyServicesService) {}

	openSnackBar(message: string, action: string) {
		this.snackBarService.openSnackBar(message, action);
	}
}
