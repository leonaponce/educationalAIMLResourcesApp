import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-resource-edit',
  templateUrl: './resource-edit.component.html',
  styleUrls: ['./resource-edit.component.css']
})
export class ResourceEditComponent implements OnInit {
  id: number;
  editMode = false;
  resourceForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private resourceService: ResourceService) {
  }

  ngOnInit() {
    this.route.params
       .subscribe(
         (params: Params) => {
            this.id = +params['id'];
            this.editMode = params['id'] !=null;
            this.initForm();
         }
       );
  }

  onSubmit() {
    console.log(this.resourceForm);
  }

  private initForm() {
    let resourceName = '';
    let resourceImagePath = '';
    let resourceDescription = '';
    let resourceConceptualCheckpoints = new FormArray([]);

  if (this.editMode) {
    const resource = this.resourceService.getResource(this.id);
    resourceName = resource.name;
    resourceImagePath = resource.imagePath;
    resourceDescription = resource.description;
    if (resource['resources']) {
      for (let conceptualcheckpoint of resource.conceptualcheckpoints) {
        resourceConceptualConcepts.push(
          new FormGroup({
            "name": new FormControl(resource.name),
            "amount": new FormControl(conceptualcheckpoint.amount)
          })
        );
      }
    }
  }

  this.resourceForm = new FormGroup({
    'name' : new FormControl(resourceName),
    'imagePath' : new FormControl(resourceImagePath),
    'description' : new FormControl(resourceDescription),
    "conceptualcheckpoints" : resourceConceptualCheckpoints
  });
}


