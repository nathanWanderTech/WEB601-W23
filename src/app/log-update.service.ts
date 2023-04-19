import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
	providedIn: 'root',
})
export class LogUpdateService {
	constructor(private updates: SwUpdate) {}

	public init() {
		this.updates.versionUpdates.subscribe((event) => {
			switch (event.type) {
				case 'VERSION_DETECTED':
					console.log(`Downloading new app version: ${event.version.hash}`);
					break;
				case 'VERSION_READY':
					console.log(`Current app version: ${event.currentVersion.hash}`);
					console.log(`New app version ready for use: ${event.latestVersion.hash}`);
					this.updates.activateUpdate().then(() => {
						console.log('Reload...');
						document.location.reload();
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
