import { ConceptualCheckpoint } from '../shared/conceptualcheckpoint.model';
import { EventEmitter } from '@angular/core';

export class ResourceRoadmapService {
    conceptualCheckpointsChanged = new EventEmitter<ConceptualCheckpoint[]>();
    private conceptualCheckpoints: ConceptualCheckpoint[] = [
      new ConceptualCheckpoint('Python Basics', 1),
      new ConceptualCheckpoint('Machine Learning Basics', 1),
    ];
    
    getConceptualCheckpoints() {
       return this.conceptualCheckpoints.slice();
    }

    addConceptualCheckpoint(conceptualCheckpoint: ConceptualCheckpoint) {
       this.conceptualCheckpoints.push(conceptualCheckpoint);
       this.conceptualCheckpointsChanged.emit(this.conceptualCheckpoints.slice());
    }

addConceptualCheckpoints(conceptualCheckpoints: ConceptualCheckpoint[]){
      /*for (let conceptualCheckpoint of conceptualCheckpoints) {
      this.addConceptualCheckpoint(conceptualCheckpoint);
      }*/
      this.conceptualCheckpoints.push(...conceptualCheckpoints);
      this.conceptualCheckpointsChanged.emit(this.conceptualCheckpoints.slice());
    }
}