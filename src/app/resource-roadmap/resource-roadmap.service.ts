import { ConceptualCheckpoint } from '../shared/conceptualcheckpoint.model';
import { EventEmitter } from '@angular/core';

export class ResourceRoadmapService {
    conceptualcheckpointsChanged = new EventEmitter<ConceptualCheckpoint[]>();
    private conceptualcheckpoints: ConceptualCheckpoint[] = [
      new ConceptualCheckpoint('Python Basics', 1),
      new ConceptualCheckpoint('Machine Learning Basics', 1),
    ];
    
    getConceptualCheckpoints() {
       return this.conceptualcheckpoints.slice();
    }

    addConceptualCheckpoint(conceptualcheckpoint: ConceptualCheckpoint) {
       this.conceptualcheckpoints.push(conceptualcheckpoint);
       this.conceptualcheckpointsChanged.emit(this.conceptualcheckpoints.slice());
    }

    addConceptualCheckpoints(conceptualcheckpoints: ConceptualCheckpoint[]){
      /*for (let conceptualCheckpoint of conceptualCheckpoints) {
      this.addConceptualCheckpoint(conceptualCheckpoint);
      }*/
      this.conceptualcheckpoints.push(...conceptualcheckpoints);
      this.conceptualcheckpointsChanged.emit(this.conceptualcheckpoints.slice());
    }
  }