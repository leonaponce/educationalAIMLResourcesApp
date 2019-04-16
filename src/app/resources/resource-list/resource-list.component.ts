import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs/Subscription';

import { Resource } from '../resource.model';
import { ResourceService } from '../resource.service';


@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit, OnDestroy  {
  resources: Resource[];
  subscription: Subscription;

  constructor(private resourceService: ResourceService,
              private router: Router,
              private route: ActivatedRoute) { 
  }

  ngOnInit() {
      this.subscription = this.resourceService.resourcesChanged
       .subscribe(
         (resources: Resource[]) => {
           this.resources = resources;
         }
       );
     this.resources = this.resourceService.getResources();
  }

  onNewResource() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

//check in on router import
