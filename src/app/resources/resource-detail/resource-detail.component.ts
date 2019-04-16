import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'

import { Resource } from '../resource.model';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.css']
})
export class ResourceDetailComponent implements OnInit {
  resource: Resource;
  id: number;

  constructor(private resourceService: ResourceService,
              private route:ActivatedRoute,
              private router: Router) {

  }
    
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.resource = this.resourceService.getResource(this.id);
        }
      );
  }

  onAddToResourceRoadmap() {
    this.resourceService.addConceptualCheckpointsToResourceRoadmap(this.resource.conceptualcheckpoints);
  }

  onEditResource() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteResource() {
    this.resourceService.deleteResource(this.id);
  }

}

//router and params not imported