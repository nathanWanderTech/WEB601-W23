import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

const pianist1 : Content = {
  id: 1,
	title: 'Yiruma',
	description: 'Lee Ru-ma (Korean: 이루마; born 15 February 1978), better known by his stage name Yiruma (Korean: 이루마), is a South Korean pianist and composer.',
	creator: 'His mom and dad',
	imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Yiruma_2017_Suwon.jpg/220px-Yiruma_2017_Suwon.jpg',
	type: 'Pianist and composer',
	tags: ['Pianist', 'Asia']
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
	tags: ['Pianist', 'Asia']
}

const pianist4 : Content = {
  id: 4,
	title: 'Diana Krall',
	description: "A Canadian jazz pianist and singer known for her contralto vocals.",
	creator: 'Her mom and dad',
	imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Diana_krall.jpg/240px-Diana_krall.jpg',
	type: 'Jazz music',
	tags: ['Pianist', 'American']
}

const pianist5 : Content = {
  id: 5,
	title: 'Lang Lang',
	description: "A Chinese pianist who has performed with leading orchestras in China, North America, Europe, and elsewhere.",
	creator: 'His mom and dad',
	imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Lang_Lang_-_World_Economic_Forum_Annual_Meeting_2010_Davos_cropped.jpg/220px-Lang_Lang_-_World_Economic_Forum_Annual_Meeting_2010_Davos_cropped.jpg',
	type: 'Classic',
}

const pianist6 : Content = {
  id: 6,
	title: 'Nobuo Uematsu',
	description: "A Japanese composer and keyboardist best known for his contributions to the Final Fantasy video game series by Square Enix",
	creator: 'His mom and dad',
	imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nobuo_uematsu_001.jpg/220px-Nobuo_uematsu_001.jpg',
	type: 'Classic',
	tags: ['Pianist', 'Asia']
}

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentList : Content[] = [];

  ngOnInit () {
    this.contentList = [pianist1, pianist2, pianist3, pianist4, pianist5, pianist6];
  }
}
