import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/core'

import { ResourcesComponent } from './resources/resources.component';
import { ResourceRoadmapComponent } from './resource-roadmap/resource-roadmap.component';
import { ResourcesStartComponent } from './resources/resources-start/resources-start.component';
import { ResourceEditComponent } from './resources/resource-edit/resource-edit.component';
import { ResourcesDetailsComponent } from './resources/resources-details/resources-details.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/resources', pathMatch: 'full' },
  { path: 'resources', component: ResourcesComponent, children: [
    { path: '', component: ResourcesStartComponent},
    { path: ':id', component: ResourcesDetailsComponent},
    { path: 'new', component: ResourceEditComponent } 
  ] },
  { path: 'resource-roadmap', component: ResourceRoadmapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

