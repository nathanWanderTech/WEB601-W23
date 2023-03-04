import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Content } from '../helper-files/content-interface';
import { contentList } from '../helper-files/contentDb';

@Injectable({
	providedIn: 'root',
})
export class PianistService {
	constructor() {}

	getPianists(): Observable<Content[]> {
		return of(contentList);
	}

	findById(id: number): Observable<Content | undefined> {
		const pianist = contentList.find((item) => {
			return item.id === id;
		});
		return of(pianist);
	}
}
