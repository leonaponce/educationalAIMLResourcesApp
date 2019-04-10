import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { ConceptualCheckpoint } from '../../shared/conceptualCheckpoint.model';
import { ResourceRoadmapService } from '../resource-roadmap.service';

@Component({
  selector: 'app-roadmap-edit',
  templateUrl:'./roadmap-edit.component.html',
  styleUrls: ['./roadmap-edit.component.css']
})
export class RoadmapEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private slService: ResourceRoadmapService) { }

  ngOnInit() {
  }
  
  onAddItem() {
    const ingName= this.nameInputRef.nativeElement.value;
    const ingAmount= this.amountInputRef.nativeElement.value;
    const newConceptualCheckpoint = new ConceptualCheckpoint(ingName, ingAmount);
    this.slService.addConceptualCheckpoint(newConceptualCheckpoint);  
  }

}


