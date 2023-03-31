import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
	name: 'filterByType',
})
export class FilterByTypePipe implements PipeTransform {
	transform(contentList: Content[], type?: string): Content[] {
		console.log(contentList)
		if (type == null) return contentList.filter((item) => item.type == null || item.type == '');;

		return contentList.filter((item) => item.type == type);
	}
}
