import { Component, OnInit, Input } from '@angular/core';

import { Resource } from '../resource.model';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailComponent implements OnInit {
  @Input() resource: Resource;

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.resourceService.addConceptualCheckpointsToResourceRoadmap(this.resource.conceptualcheckpoints);
  }

}
