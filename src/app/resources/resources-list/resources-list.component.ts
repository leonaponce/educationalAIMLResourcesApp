import { Component, OnInit } from '@angular/core';

import { Resource } from '../resource.model';
import { ResourceService } from '../resources.service';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.css']
})
export class ResourcesListComponent implements OnInit {
  resources: Resource[];

  constructor(private resourcesService: ResourcesService) { 
  }

  ngOnInit() {
     this.resources = this.resourcesService.getResources();
  }
}

caches
