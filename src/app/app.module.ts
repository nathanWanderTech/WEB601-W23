import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FilterByTypePipe } from './filter-by-type.pipe';
import { SearchContentPipe } from './search-content.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { CreateContentComponent } from './create-content/create-content.component';
import { MessagesComponent } from './messages/messages.component';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { ModifyContentFormComponent } from './modify-content-form/modify-content-form.component';

@NgModule({
	declarations: [
		AppComponent,
		ContentCardComponent,
		ContentListComponent,
		FilterByTypePipe,
		SearchContentPipe,
		HoverAffectDirective,
		CreateContentComponent,
		MessagesComponent,
		ModifyContentComponentComponent,
  ModifyContentFormComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
			dataEncapsulation: false,
			delay: 1000,
		}),
		BrowserAnimationsModule,
		MatButtonModule,
		MatInputModule,
		MatSelectModule,
		MatDialogModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
