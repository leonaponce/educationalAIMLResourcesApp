import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResourcesComponent } from './resources/resources.component';
import { ResourcesListComponent } from './resources/resources-list/resources-list.component';
import { ResourcesDetailsComponent } from './resources/resources-details/resources-details.component';
import { ResourcesItemComponent } from './resources/resources-list/resources-item/resources-item.component';
import { ResourceRoadmapComponent } from './resource-roadmap/resource-roadmap.component';
import { ResourceEditComponent } from './resource-roadmap/resource-edit/resource-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResourcesComponent,
    ResourcesListComponent,
    ResourcesDetailsComponent,
    ResourcesItemComponent,
    ResourceRoadmapComponent,
    ResourceEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
