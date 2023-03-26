import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { SearchContent } from '../helper-files/search-content-interface';
import { MessageService } from '../services/message.service';
import { PianistService } from '../services/pianist.service';

@Component({
	selector: 'app-content-list',
	templateUrl: './content-list.component.html',
	styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent {
	contentList: Content[] = [];
	applySearch: SearchContent | null = null;

	searchFormObject: SearchContent = {
		title: '',
	};

	constructor(private pianistService: PianistService, private messageService: MessageService) {}

	ngOnInit() {
		this.pianistService.getPianists().subscribe((pianistList) => {
			this.messageService.add('Content array loaded!');
			return (this.contentList = [...pianistList]);
		});
	}

	handleSearch() {
		this.applySearch = { ...this.searchFormObject };
	}

	parentAddNewItem(newContent: Content) {
		this.contentList = [...this.contentList, newContent];
	}

	addContentToList(newContent: Content) {
		this.pianistService.addContent(newContent).subscribe((newContentFromServer) => {
			this.contentList = [...this.contentList, newContentFromServer];
			this.messageService.add(`New pianist ID ${newContentFromServer.id} name ${newContentFromServer.title} added`);
		});
	}
}
