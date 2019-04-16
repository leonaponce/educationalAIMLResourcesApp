import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResourcesComponent } from './resources/resources.component';
import { ResourceListComponent } from './resources/resource-list/resource-list.component';
import { ResourceDetailComponent } from './resources/resource-detail/resource-detail.component';
import { ResourceItemComponent } from './resources/resource-list/resource-item/resource-item.component';
import { ResourceRoadmapComponent } from './resource-roadmap/resource-roadmap.component';
import { RoadmapEditComponent } from './resource-roadmap/roadmap-edit/roadmap-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ResourceRoadmapService } from './resource-roadmap/resource-roadmap.service';
import { AppRoutingModule } from './app-routing.module';
import { ResourceStartComponent } from './resources/resource-start/resource-start.component';
import { ResourceEditComponent } from './resources/resource-edit/resource-edit.component';
import { ResourceService } from './resources/resource.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResourcesComponent,
    ResourceListComponent,
    ResourceDetailComponent,
    ResourceItemComponent,
    ResourceRoadmapComponent,
    RoadmapEditComponent,
    DropdownDirective,
    ResourceStartComponent,
    ResourceEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ResourceRoadmapService, ResourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

