import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResourcesComponent } from './resources/resources.component';
import { ResourceListComponent } from './resources/resources-list/resources-list.component';
import { ResourcesDetailsComponent } from './resources/resources-details/resources-details.component';
import { ResourceItemComponent } from './resources/resources-list/resources-item/resources-item.component';
import { ResourceRoadmapComponent } from './resource-roadmap/resource-roadmap.component';
import { RoadmapEditComponent } from './resource-roadmap/roadmap-edit/roadmap-edit.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ResourceRoadmapService } from './resource-roadmap/resource-roadmap.service';
import { AppRoutingModule } from './app-routing.module';
import { ResourceStartComponent } from './resource-start/resource-start.component';
import { ResourcesStartComponent } from './resources/resources-start/resources-start.component';
import { ResourceEditComponent } from './resources/resource-edit/resource-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HeaderComponent,
    ResourcesComponent,
    ResourceListComponent,
    ResourcesDetailsComponent,
    ResourceItemComponent,
    ResourceRoadmapComponent,
    RoadmapEditComponent,
    ServersComponent,
    DropdownDirective,
    ResourceStartComponent,
    ResourcesStartComponent,
    ResourceEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ResourceRoadmapService],
  bootstrap: [AppComponent]
})
export class AppModule { }

