import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

const pianist1 : Content = {
  id: 1,
	title: 'Yiruma',
	description: 'Lee Ru-ma (Korean: 이루마; born 15 February 1978), better known by his stage name Yiruma (Korean: 이루마), is a South Korean pianist and composer.',
	creator: 'His mom and dad',
	imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Yiruma_2017_Suwon.jpg/220px-Yiruma_2017_Suwon.jpg',
	type: 'Pianist and composer',
}

const pianist2 : Content = {
  id: 2,
	title: 'Richard Clayderman',
	description: "Born Philippe Pagès French pronunciation: ​[filip paʒɛs], 28 December 1953 in Paris is a French pianist",
	creator: 'His mom and dad',
	imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Richard_Clayderman.jpg/220px-Richard_Clayderman.jpg',
	type: 'Classical music',
}

const pianist3 : Content = {
  id: 3,
	title: 'Hiromi Uehara',
	description: "Hiromi Uehara (上原 ひろみ, Uehara Hiromi, born 26 March 1979), known professionally as Hiromi, is a Japanese jazz composer and pianist.",
	creator: 'Her mom and dad',
	imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Hiromi_Uehara_-_Jazz_na_Starowce_-_2.jpg/220px-Hiromi_Uehara_-_Jazz_na_Starowce_-_2.jpg',
	type: 'Jazz music',
}

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentLists = new ContentList();

  ngOnInit () {
    this.contentLists.addContent(pianist1);
    this.contentLists.addContent(pianist2);
    this.contentLists.addContent(pianist3);
  }
}
