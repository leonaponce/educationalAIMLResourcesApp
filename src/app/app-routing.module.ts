import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/core'

import { ResourcesComponent } from './resources/resources.component';
import { ResourceRoadmapComponent } from './resource-roadmap/resource-roadmap.component';
import { ResourcesStartComponent } from './resources/resources-start/resources-start.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/resources', pathMatch: 'full' },
  { path: 'resources', component: ResourcesComponent, children: [
    {path: '', component: ResourcesStartComponent}
  ] },
  { path: 'resource-roadmap', component: ResourceRoadmapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

