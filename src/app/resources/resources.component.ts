import { Component, OnInit } from '@angular/core';

import { Resource } from './resource.model';

import { ResourceService } from './resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
  providers: [ResourceService]
})
export class ResourcesComponent implements OnInit {
  selectedResource: Resource;
  
  constructor(private resourcesService: ResourcesService) { }

  ngOnInit() {
    this.resourcesService.resourcesSelected
      .subscribe(
         (resource: Resource) => { 
          this.selectedResource = resource;
         }
      );
  }

}
 