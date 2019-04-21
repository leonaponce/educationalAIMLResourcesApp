import { ConceptualCheckpoint } from '../shared/conceptualcheckpoint.model';
import { Subject } from "rxjs";

export class ResourceRoadmapService {
    conceptualcheckpointsChanged = new Subject<ConceptualCheckpoint[]>();
    startedEditing = new Subject<number>();
    private conceptualcheckpoints: ConceptualCheckpoint[] = [
      new ConceptualCheckpoint('Python Basics', 1),
      new ConceptualCheckpoint('Machine Learning Basics', 1),
    ];
    
    getConceptualCheckpoints() {
       return this.conceptualcheckpoints.slice();
    }

    getConceptualCheckpoint(index: number) {
      return this.conceptualcheckpoints[index];
    }

    addConceptualCheckpoint(conceptualcheckpoint: ConceptualCheckpoint) {
       this.conceptualcheckpoints.push(conceptualcheckpoint);
       this.conceptualcheckpointsChanged.next(this.conceptualcheckpoints.slice());
    }

    addConceptualCheckpoints(conceptualcheckpoints: ConceptualCheckpoint[]){
      // for (let ingredient of ingredients) {
      //   this.addIngredient(ingredient);
      // }
      this.conceptualcheckpoints.push(...conceptualcheckpoints);
      this.conceptualcheckpointsChanged.next(this.conceptualcheckpoints.slice());
    }

    updateConceptualCheckpoint(index: number, newConceptualCheckpoint: ConceptualCheckpoint) {
      this.conceptualcheckpoints[index] = newConceptualCheckpoint;
      this.conceptualcheckpointsChanged.next(this.conceptualcheckpoints.slice());
    }

    deleteConceptualCheckpoint(index: number) {
      this.conceptualcheckpoints.splice(index, 1);
      this.conceptualcheckpointsChanged.next(this.conceptualcheckpoints.slice());
    }
  }