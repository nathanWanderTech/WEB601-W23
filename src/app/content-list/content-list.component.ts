import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { contentList } from '../helper-files/contentDb';
import { SearchContent } from '../helper-files/search-content-interface';

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

	ngOnInit() {
		this.contentList = contentList;
	}

	handleSearch() {
		this.applySearch = { ...this.searchFormObject };
	}

	parentAddNewItem(newContent: Content) {
		this.contentList = [...this.contentList, newContent];
	}
}
