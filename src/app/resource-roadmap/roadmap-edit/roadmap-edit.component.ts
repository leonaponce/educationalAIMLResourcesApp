import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { ConceptualCheckpoint } from '../../shared/conceptualcheckpoint.model';
import { ResourceRoadmapService } from '../resource-roadmap.service';

@Component({
  selector: 'app-roadmap-edit',
  templateUrl: './roadmap-edit.component.html',
  styleUrls: ['./roadmap-edit.component.css']
})
export class RoadmapEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: ConceptualCheckpoint;

  constructor(private slService: ResourceRoadmapService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.slService.getConceptualCheckpoint(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newConceptualCheckpoint = new ConceptualCheckpoint(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateConceptualCheckpoint(this.editedItemIndex, newConceptualCheckpoint);
    } else {
      this.slService.addConceptualCheckpoint(newConceptualCheckpoint);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteConceptualCheckpoint(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
