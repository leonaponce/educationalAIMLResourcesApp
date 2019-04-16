import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Resource } from './resource.model';
import { ConceptualCheckpoint } from '../shared/conceptualcheckpoint.model';
import { ResourceRoadmapService } from '../resource-roadmap/resource-roadmap.service';


@Injectable()
export class ResourceService {
    resourcesChanged = new Subject<Resource[]>();
  
    private resources: Resource[] = [
        new Resource(
          "Kaggle Python Mini-Course",
          "Delve into Data Science's the most important language",
          "https://freeicons.io/laravel/public/uploads/icons/png/6000503251553667373-128.png",
          [
            new ConceptualCheckpoint ("Python Basics",1),
            new ConceptualCheckpoint ("Python Practice",1) 
          ]),
        new Resource(
          "Kaggle Machine Learning Mini-Course",
          "Explore Data Science's hottest field", 
          "https://freeicons.io/laravel/public/uploads/icons/png/18589158161548402157-128.png",
          [
            new ConceptualCheckpoint ("Machine Learning Basics",1),
            new ConceptualCheckpoint ("Machine Learning Practice",1) 
          ]),
          new Resource(
           "Kaggle Deep Learning Mini-Course", 
           "Learn about Tensorflow, the core open source ML library", 
           "https://freeicons.io/laravel/public/uploads/icons/png/19350075911548402146-64.png",
          [
            new ConceptualCheckpoint ("Tensorflow Basics",1),
            new ConceptualCheckpoint ("Tensorflow Practice",1) 
          ])
       ];

      constructor(private slService: ResourceRoadmapService) {}

      getResources() {
        return this.resources.slice();
      }

      getResource(index: number) { 
        return this.resources[index];
      }

      addConceptualCheckpointsToResourceRoadmap(conceptualcheckpoints: ConceptualCheckpoint[]) {
         this.slService.addConceptualCheckpoints(conceptualcheckpoints);
      }

      addResource(resource: Resource) {
        this.resources.push(resource);
        this.resourcesChanged.next(this.resources.slice());
      }

      updateResource(index: number, newResource: Resource) {
        this.resources[index] = newResource; 
        this.resourcesChanged.next(this.resources.slice()); 
      }

      deleteResource(index: number) {
        this.resources.splice(index, 1);
        this.resourcesChanged.next(this.resources.slice());
      }
}

