import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { PianistService } from './services/pianist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Con_Le_WEB601Assignments_Pianist';

  constructor(private pianistService: PianistService) {}

  findById(id: number): Content | undefined {
		let foundPianist: Content | undefined;
		this.pianistService.findById(id).subscribe((pianist) => {
			return (foundPianist = pianist);
		});
		return foundPianist;
	}
}
