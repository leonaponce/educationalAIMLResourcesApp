import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Resource } from '../resource.model';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.css']
})
export class ResourceListComponent implements OnInit {
  resources: Resource[];

  constructor(private resourceService: ResourceService,
    private router: Router) { 
  }

  ngOnInit() {
     this.resources = this.resourceService.getResources();
  }

  onNewResource() {
    this.resources.navigate(['new'], {relativeTo: this.route}
  }
}

//check in on router import
