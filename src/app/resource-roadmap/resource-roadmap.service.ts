import { ConceptualCheckpoints } from '../../shared/conceptualcheckpoints.module';
import { EventEmitter } from '@angular/core';

export class ResourceRoadmapService {
    conceptualCheckpointsChanged = new EventEmitter<conceptualCheckpoints[]>();
    private conceptualcheckpoints: ConceptualCheckpoints[] = [
      new ConceptualCheckpoints('Python Basics', 2),
      new ConceptualCheckpoints('Machine Learning Basics', 3),
    ];
    
    getconceptualcheckpoints() {
       return this.conceptualcheckpoints.slice();
    }

    addconceptualcheckpoints(conceptualcheckpoints: ConceptualCheckpoints) {
       this.conceptualcheckpoints.push(conceptualcheckpoints);
       this.conceptualCheckpointsChanged.emit(this.ingredients.slice());
    }
}