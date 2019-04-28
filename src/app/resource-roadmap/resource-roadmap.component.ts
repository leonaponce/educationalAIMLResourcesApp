import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ConceptualCheckpoint } from '../shared/conceptualcheckpoint.model';
import { ResourceRoadmapService } from './resource-roadmap.service';

@Component({
  selector: 'app-resource-roadmap',
  templateUrl: './resource-roadmap.component.html',
  styleUrls: ['./resource-roadmap.component.css']
})
export class ResourceRoadmapComponent implements OnInit, OnDestroy {
  conceptualcheckpoints: ConceptualCheckpoint[];
  private subscription: Subscription;

  constructor(private slService: ResourceRoadmapService) { }

  ngOnInit() {
    this.conceptualcheckpoints = this.slService.getConceptualCheckpoints();
    this.subscription = this.slService.conceptualcheckpointsChanged
      .subscribe(
         (conceptualcheckpoints: ConceptualCheckpoint[]) => {
           this.conceptualcheckpoints = conceptualcheckpoints;
         }
      );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index)
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }
}


