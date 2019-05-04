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
      'Intro to Python',
      'Start utlizing this vital programming language',
      'https://www.technotification.com/wp-content/uploads/2018/04/python-is-the-best-programming-770x515.jpg',
      [
        new ConceptualCheckpoint('Python Basics', 1),
        new ConceptualCheckpoint('Python Practice', 1)
      ]),
    new Resource('Intro to Machine Learning',
      'Explore the hottest field in Data Science',
      'https://mk0wittysparksm75pi6.kinstacdn.com/wp-content/uploads/2017/08/Machine-Learning-768x480.jpg',
      [
        new ConceptualCheckpoint('Machine Learning Basics', 1),
        new ConceptualCheckpoint('Machine Learning Practice', 1)
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
