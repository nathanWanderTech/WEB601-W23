import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FilterByTypePipe } from './filter-by-type.pipe';
import { SearchContentPipe } from './search-content.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { CreateContentComponent } from './create-content/create-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    FilterByTypePipe,
    SearchContentPipe,
    HoverAffectDirective,
    CreateContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
