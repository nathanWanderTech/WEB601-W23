import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { SearchContent, SearchResults } from './helper-files/search-content-interface';

@Pipe({
	name: 'searchContent',
})
export class SearchContentPipe implements PipeTransform {
	transform(contentList: Content[], searchObject: SearchContent | null): SearchResults {
		if (searchObject == null) return { total: 0, results: [] };

		const filtered = contentList.filter((item) => {
			if (searchObject.title === '' || searchObject.title == null) return false;
			return item.title.toLowerCase().includes(searchObject.title.toLowerCase());
		});
		return { total: filtered.length, results: filtered };
	}
}
