import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
	selector: 'app-content-card',
	templateUrl: './content-card.component.html',
	styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent {
  @Input() isFirst: boolean = false;
	@Input() content: Content | undefined;

	handleClickImage(content?: Content) {
		if (!content) return console.log('No content');

		console.log('---------------------');
		console.log("ID " + content.id + ": " + content.title);
	}
}
