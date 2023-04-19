import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { SnackBarNotiyServicesService } from './services/snack-bar-notiy-services.service';

@Injectable({
	providedIn: 'root',
})
export class LogUpdateService {
	constructor(private updates: SwUpdate, private snackBarService: SnackBarNotiyServicesService) {}

	updateAndReload(updatesObject: SwUpdate) {
		console.log('Updating App.....');
		updatesObject.activateUpdate().then(() => {
			console.log('Reload...');
			document.location.reload();
		});
	}

	public init() {
		console.log('Run init LogUpdateService');

		this.updates.versionUpdates.subscribe((event) => {
			switch (event.type) {
				case 'VERSION_DETECTED':
					console.log(`Downloading new app version: ${event.version.hash}`);
					this.snackBarService.openSnackBar('New app version detected', 'Close');
					break;
				case 'VERSION_READY':
					console.log(`Current app version: ${event.currentVersion.hash}`);
					console.log(`New app version ready for use: ${event.latestVersion.hash}`);
					this.snackBarService.openSnackBar('You can update new App version now!', 'Update Now', () => {
						this.updateAndReload(this.updates)
					});
					break;
				case 'VERSION_INSTALLATION_FAILED':
					console.log(`Install failed`);
					break;
				default:
					console.log('Default 📢[log-update.service.ts:21]: LogUpdateService');
					break;
			}
		});
	}
}
