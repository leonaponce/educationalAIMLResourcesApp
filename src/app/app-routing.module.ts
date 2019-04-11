import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/core'

import { ResourcesComponent } from './resources/resources.component';
import { ResourceRoadmapComponent } from './resource-roadmap/resource-roadmap.component';

const appRoutes: Routes = [
  { path: "", redirectTo: '/resources' },
  { path: 'resources', component: ResourcesComponent },
  { path: 'resource-roadmap', component: ResourceRoadmapComponent },
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule {
    
}

