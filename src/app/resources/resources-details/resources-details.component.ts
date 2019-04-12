import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/core'

import { Resource } from '../resource.model';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-resources-details',
  templateUrl: './resources-details.component.html',
  styleUrls: ['./resources-details.component.css']
})
export class ResourcesDetailsComponent implements OnInit {
  resource: Resource;

  constructor(private resourceService: ResourceService,
              private route:ActivatedRoute) {

  }
    

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params[ 'id' ];
        }
      );
  }

  onAddToShoppingList() {
    this.resourceService.addConceptualCheckpointsToResourceRoadmap(this.resource.conceptualcheckpoints);
  }

}
