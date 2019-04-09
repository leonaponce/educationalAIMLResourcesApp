import { Component, OnInit } from '@angular/core';

import { Resource } from './resource.model';

import { ResourceService } from './resource.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
  providers: [ResourceService]
})
export class ResourcesComponent implements OnInit {
  selectedResource: Resource;
  
  constructor(private resourcesService: ResourceService) { }

  ngOnInit() {
    this.resourcesService.resourceSelected
      .subscribe(
         (resource: Resource) => { 
          this.selectedResource = resource;
         }
      );
  }

}
 