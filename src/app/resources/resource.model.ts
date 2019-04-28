import { ConceptualCheckpoint } from '../shared/conceptualcheckpoint.model';

export class Resource {
  public name: string;
  public description: string;
  public imagePath: string;
  public conceptualcheckpoints: ConceptualCheckpoint[];

  constructor(name: string, desc: string, imagePath: string, conceptualcheckpoints: ConceptualCheckpoint[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.conceptualcheckpoints = conceptualcheckpoints;
  }
}
