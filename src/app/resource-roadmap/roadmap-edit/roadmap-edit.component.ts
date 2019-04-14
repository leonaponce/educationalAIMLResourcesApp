import { Component, OnInit } from '@angular/core';

import { ConceptualCheckpoint } from '../../shared/conceptualcheckpoint.model';
import { ResourceRoadmapService } from '../resource-roadmap.service';

@Component({
  selector: 'app-roadmap-edit',
  templateUrl:'./roadmap-edit.component.html',
  styleUrls: ['./roadmap-edit.component.css']
})
export class RoadmapEditComponent implements OnInit {

  constructor(private slService: ResourceRoadmapService) { }

  ngOnInit() {
  }
  
  onAddItem(form: NgForm) {
    const value = form.value;
    const newConceptualCheckpoint = new ConceptualCheckpoint(value.name, value.amount);
    this.slService.addConceptualCheckpoint(newConceptualCheckpoint);  
  }

}


