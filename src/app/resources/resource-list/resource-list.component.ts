import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { Resource } from '../resource.model';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {
  resources: Resource[];

  constructor(private resourceService: ResourceService,
              private router: Router,
              private route: ActivatedRoute) { 
  }

  ngOnInit() {
     this.resources = this.resourceService.getResources();
  }

  onNewResource() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}

//check in on router import
