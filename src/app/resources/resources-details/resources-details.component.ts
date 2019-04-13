import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'

import { Resource } from '../resource.model';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-resources-details',
  templateUrl: './resources-details.component.html',
  styleUrls: ['./resources-details.component.css']
})
export class ResourcesDetailsComponent implements OnInit {
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
          this.resource = this.resourceService.getResource(this.id)
        }
      );
  }

  onAddToResourceRoadmap() {
    this.resourceService.addConceptualCheckpointsToResourceRoadmap(this.resource.conceptualcheckpoints);
  }

  onEditResource() {
    this.router.navigate(['edit']), {relativeTo: this.route});
  }

}

//router and params not imported