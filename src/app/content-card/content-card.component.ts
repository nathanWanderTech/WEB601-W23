import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Content } from '../helper-files/content-interface';

@Component({
	selector: 'app-content-card',
	templateUrl: './content-card.component.html',
	styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent {
	@Input() isFirst: boolean = false;
	@Input() content: Content | undefined;

	constructor(private router: Router) {}

	defaultImageUrl =
		'https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png'; // random image

	handleClickImage(content?: Content) {
		if (!content) return console.log('No content');

		console.log('---------------------');
		console.log('ID ' + content.id + ': ' + content.title);
	}

	goToDetailPage(id?: any) {
		this.router.navigate(['/list', id]);
	}
}
