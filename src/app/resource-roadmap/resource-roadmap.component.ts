import { Component, OnInit } from '@angular/core';

import { ConceptualCheckpoint } from '../shared/conceptualcheckpoint.model';
import { ResourceRoadmapService } from './resource-roadmap.service';

@Component({
  selector: 'app-resource-roadmap',
  templateUrl: './resource-roadmap.component.html',
  styleUrls: ['./resource-roadmap.component.css']
})
export class ResourceRoadmapComponent implements OnInit {
  conceptualCheckpoints: ConceptualCheckpoint[];

  constructor(private slService: ResourceRoadmapService) { }

  ngOnInit() {
    this.conceptualCheckpoints = this.slService.getConceptualCheckpoints();
    this.slService.conceptualCheckpointsChanged
      .subscribe(
         (conceptualCheckpoints: ConceptualCheckpoint[]) => {
           this.conceptualCheckpoints = conceptualCheckpoints;
         }
      );
  }

}

