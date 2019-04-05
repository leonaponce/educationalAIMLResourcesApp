
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

import { ConceptualCheckpoints } from 'src/app/shared/conceptualcheckpoints.module';

@Component({
  selector: 'app-roadmap-edit',
  templateUrl:'./roadmap-edit.component.html',
  styleUrls: ['./roadmap-edit.component.css']
})
export class RoadmapEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() conceptualCheckpointsAdded = new EventEmitter<ConceptualCheckpoints>();

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


