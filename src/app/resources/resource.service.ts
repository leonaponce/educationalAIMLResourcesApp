import { EventEmitter, Injectable } from '@angular/core';

import { Resource } from './resource.model';
import { ConceptualCheckpoint } from '../shared/conceptualcheckpoint.model';
import { ResourceRoadmapService } from '../resource-roadmap/resource-roadmap.service';
import { isContentQueryHost } from '@angular/core/src/render3/util';

@Injectable()
export class ResourceService {
    resourceSelected = new EventEmitter<Resource>();
  
    private resources: Resource[] = [
        new Resource(
          "Kaggle Python Mini-Course",
          "Delve into Data Science's most important language",
          //<img src = "assets/img/python-icon.png">,
          [
            new ConceptualCheckpoint ("Python",1),
            new ConceptualCheckpoint ("Python Practice",1) 
          ]),
        new Resource(
          "Kaggle Machine Learning Mini-Course",
          "Explore Data Science's hottest field", 
          //<img src = "assets/img/machinelearning.png">,
          [
            new ConceptualCheckpoint ("Machine Learning",1),
            new ConceptualCheckpoint ("Machine Learning Practice",1) 
          ]),
          new Resource(
           "Kaggle Deep Learning Mini-Course", 
           "Impress yourself with your new Tensorflow skills", 
           //<img src = "assets/img/deeplearning.png">,
          [
            new ConceptualCheckpoint ("Tensorflow",1),
            new ConceptualCheckpoint ("Tensorflow Practice",1) 
          ])
       ];

      constructor(private slService: ResourceRoadmapService) {}

      getResources() {
        return this.resources.slice();
      }

      getResource(index:number) { 
        return this.resources[index];
      }

      addConceptualCheckpointsToResourceRoadmap(conceptualcheckpoints: ConceptualCheckpoint[]) {
         this.slService.addConceptualCheckpoints(conceptualcheckpoints);
      }
}

