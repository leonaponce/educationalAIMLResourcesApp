import { Component, OnInit } from '@angular/core';

import { ConceptualCheckpoint } from '../shared/conceptualcheckpoint.model';
import { ResourceRoadmapService } from './resource-roadmap.service';

@Component({
  selector: 'app-resource-roadmap',
  templateUrl: './resource-roadmap.component.html',
  styleUrls: ['./resource-roadmap.component.css']
})
export class ResourceRoadmapComponent implements OnInit {
  conceptualcheckpoints: ConceptualCheckpoint[];
  private subscription: Subscription

  constructor(private slService: ResourceRoadmapService) { }

  ngOnInit() {
    this.conceptualcheckpoints = this.slService.getConceptualCheckpoints();
    this.slService.conceptualcheckpointsChanged
      .subscribe(
         (conceptualcheckpoints: ConceptualCheckpoint[]) => {
           this.conceptualcheckpoints = conceptualcheckpoints;
         }
      );
  }

}

