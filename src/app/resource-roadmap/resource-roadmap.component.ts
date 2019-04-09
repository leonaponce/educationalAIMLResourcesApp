import { Component, OnInit } from '@angular/core';

import { ConceptualCheckpoints } from '../shared/conceptualcheckpoints.module';
import { Resource-RoadmapService } from './resouce-roadmap.service';

@Component({
  selector: 'app-resource-roadmap',
  templateUrl: './resource-roadmap.component.html',
  styleUrls: ['./resource-roadmap.component.css']
})
export class ResourceRoadmapComponent implements OnInit {
  conceptualcheckpoints: ConceptualCheckpoints[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.conceptualcheckpoints = this.slService.getIngredients();
  }

  onConceptualCheckpointsAdded(conceptualcheckpoints: ConceptualCheckpoints) {
    this.conceptualcheckpoints.push(conceptualcheckpoints);
  }

}
