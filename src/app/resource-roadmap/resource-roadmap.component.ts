import { Component, OnInit } from '@angular/core';

import { ConceptualCheckpoints } from '../shared/conceptualcheckpoints.module'

@Component({
  selector: 'app-resource-roadmap',
  templateUrl: './resource-roadmap.component.html',
  styleUrls: ['./resource-roadmap.component.css']
})

export class ResourceRoadmapComponent implements OnInit {
  ConceptualCheckpoints = ConceptualCheckpoints [] = [
    new ConceptualCheckpoints('Python Basics', 5),
    new ConceptualCheckpoints('Machine Learning Basics', 5),
  ];

  constructor() { }

  ngOnInit() {
  }

  onConceptualCheckpointsAdded(conceptualcheckpoints: ConceptualCheckpoints) {
    this.ConceptualCheckpoints.push(conceptualcheckpoints);
  }

}
