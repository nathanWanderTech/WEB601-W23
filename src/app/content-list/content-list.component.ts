import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { contentList } from '../helper-files/contentDb';
import { SearchContent } from '../helper-files/search-content-interface';
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

	constructor(private pianistService: PianistService) {}

	ngOnInit() {
		this.pianistService.getPianists().subscribe((pianistList) => {
			return (this.contentList = pianistList);
		});
	}

	handleSearch() {
		this.applySearch = { ...this.searchFormObject };
	}

	parentAddNewItem(newContent: Content) {
		this.contentList = [...this.contentList, newContent];
	}
}
