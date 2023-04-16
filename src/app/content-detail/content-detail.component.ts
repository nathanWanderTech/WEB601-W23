import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../services/message.service';
import { PianistService } from '../services/pianist.service';

@Component({
	selector: 'app-content-detail',
	templateUrl: './content-detail.component.html',
	styleUrls: ['./content-detail.component.scss'],
})
export class ContentDetailComponent {
	id: number = 0;
	content: Content | undefined = undefined;
	defaultImageUrl =
		'https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png'; // random image

	constructor(
		private route: ActivatedRoute,
		private contentService: PianistService,
		private messageService: MessageService
	) {}

	ngOnInit() {
		this.route.paramMap.subscribe((params) => {
			this.id = Number(params.get('id') ?? 0);
			this.contentService.findById(this.id).subscribe((content) => {
				this.content = content;
			});
			this.messageService.add(`Retrieved: pianist ID ${this?.content?.id} with title ${this?.content?.title}`);
		});
	}
}
