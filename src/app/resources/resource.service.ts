import { EventEmitter, Injectable } from '@angular/core';

import { Resource } from './resource.model';
import { ConceptualCheckpoint } from '../shared/conceptualcheckpoint.model';
import { ResourceRoadmapService } from '../resource-roadmap/resource-roadmap.service';

@Injectable()
export class ResourceService {
    resourceSelected = new EventEmitter<Resource>();
  
    private resources: Resource[] = [
        new Resource(
          "Kaggle Python Mini-Course",
          "Delve into Data Science's the most important language",
          "https://freeicons.io/laravel/public/uploads/icons/png/6000503251553667373-128.png",
          [
            new ConceptualCheckpoint ("Python",1),
            new ConceptualCheckpoint ("Python Practice",1) 
          ]),
        new Resource(
          "Kaggle Machine Learning Mini-Course",
          "Explore Data Science's hottest field", 
          "https://freeicons.io/laravel/public/uploads/icons/png/18589158161548402157-128.png",
          [
            new ConceptualCheckpoint ("Machine Learning",1),
            new ConceptualCheckpoint ("Machine Learning Practice",1) 
          ]),
          new Resource(
           "Kaggle Deep Learning Mini-Course", 
           "Learn about Tensorflow, the core open source ML library", 
           "https://freeicons.io/laravel/public/uploads/icons/png/19350075911548402146-64.png",
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

