import { ConceptualCheckpoints } from "../shared/conceptualcheckpoints.model";

export class Resource {
  public name: string;
  public description: string;
  public imagePath: string;
  public conceptualcheckpoints: ConceptualCheckpoints[];

  constructor(name: string, desc: string, imagePath: string, conceptualcheckpoints: ConceptualCheckpoints []) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.conceptualcheckpoints = conceptualcheckpoints;
  }
}
