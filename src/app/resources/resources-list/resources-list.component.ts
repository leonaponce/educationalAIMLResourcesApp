import { Component, OnInit } from '@angular/core';

import { Resource } from '../resource.model';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {
  resources: Resource[];

  constructor(private resourceService: ResourceService) { 
  }

  ngOnInit() {
     this.resources = this.resourceService.getResources();
  }
}

