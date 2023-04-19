import { ApplicationRef, Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Content } from './helper-files/content-interface';
import { LogUpdateService } from './log-update.service';
import { MessageService } from './services/message.service';
import { PianistService } from './services/pianist.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'Con_Le_WEB601Assignments_Pianist';

	constructor(
		private pianistService: PianistService,
		private messageService: MessageService,
		private logService: LogUpdateService,
		private updates: SwUpdate,
		private appRef: ApplicationRef
	) {}

	ngOnInit(): void {
		this.logService.init();
	}

	findById(id: number): Content | undefined {
		let foundPianist: Content | undefined;
		this.pianistService.findById(id).subscribe((pianist) => {
			return (foundPianist = pianist);
		});
		if (foundPianist) {
			this.messageService.add(`Content Item at id: ${id}`);
		}
		return foundPianist;
	}
}
