import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { MessageService } from './services/message.service';
import { PianistService } from './services/pianist.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'Con_Le_WEB601Assignments_Pianist';

	constructor(private pianistService: PianistService, private messageService: MessageService) {}

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
