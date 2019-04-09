import { ConceptualCheckpoints } from '../shared/conceptualcheckpoints.module';

export class ResourceRoadmapService {
    private conceptualcheckpoints: ConceptualCheckpoints[] = [
      new ConceptualCheckpoints('Python Basics', 2),
      new ConceptualCheckpoints('Machine Learning Basics', 3),
    ];
    
    getconceptualcheckpoints() {
       return this.conceptualcheckpoints.slice();
    }

    addconceptualcheckpoints(conceptualcheckpoints: ConceptualCheckpoints) {
       this.conceptualcheckpoints.push(conceptualcheckpoints);
    }
}