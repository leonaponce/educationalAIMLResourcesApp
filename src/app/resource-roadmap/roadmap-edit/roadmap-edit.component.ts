
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { ConceptualCheckpoints } from '../../conceptualcheckpoints.module';

@Component({
  selector: 'app-roadmap-edit',
  templateUrl:'./roadmap-edit.component.html',
  styleUrls: ['./roadmap-edit.component.css']
})
export class RoadmapEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  
  onAddItem() {
    const ingName= this.nameInputRef.nativeElement.value;
    const ingAmount= this.amountInputRef.nativeElement.value;
    const newConceptualCheckpoints = new ConceptualCheckpoints(ingName, ingAmount);
    this.conceptualCheckpointsAdded.emit(newConceptualCheckpoints);
  }
}


