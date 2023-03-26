import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Content } from '../helper-files/content-interface';
import { contentList } from '../helper-files/contentDb';

@Injectable({
	providedIn: 'root',
})
export class PianistService {
	constructor(private http: HttpClient) {}

	private httpOptions = {
		headers: new HttpHeaders({ 'Content-type': 'application/json' }),
	};

	getPianists(): Observable<Content[]> {
		// return of(contentList);
		return this.http.get<Content[]>('api/content');
	}

	findById(id: number): Observable<Content | undefined> {
		const pianist = contentList.find((item) => {
			return item.id === id;
		});
		return of(pianist);
	}

	addContent(newContentItem: Content): Observable<Content> {
		return this.http.post<Content>('api/content', newContentItem, this.httpOptions);
	}
}
