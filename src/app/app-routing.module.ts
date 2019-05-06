import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResourcesComponent } from './resources/resources.component';
import { ResourceRoadmapComponent } from './resource-roadmap/resource-roadmap.component';
import { ResourceStartComponent } from './resources/resource-start/resource-start.component';
import { ResourceDetailComponent } from './resources/resource-detail/resource-detail.component';
import { ResourceEditComponent } from './resources/resource-edit/resource-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/resources', pathMatch: 'full' },
  { path: 'resources', component: ResourcesComponent, children: [
    { path: '', component: ResourceStartComponent },
    { path: 'new', component: ResourceEditComponent },
    { path: ':id', component: ResourceDetailComponent },
    { path: ':id/edit', component: ResourceEditComponent },
  ] },
  { path: 'resource-roadmap', component: ResourceRoadmapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
