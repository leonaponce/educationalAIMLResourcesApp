import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

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
    // const newResource = new Resource(
    //   this.resourceForm.value['name'], 
    //   this.resourceForm.value['description']);
    //   this.resourceForm.value['imagePath']);
    //   this.resourceForm.value['conceptualcheckpoints']);
    if (this.editMode) {
      this.resourceService.updateResource(this.id, this.resourceForm.value);
    } else {
      this.resourceService.updateResource(newResource);
    }
  }

  onAddConceptualCheckpoint() {
    <FormArray>this.resourceForm.get('conceptualcheckpoints')).push(
      new FormGroup({
        "name": new FormControl(null, [
          Validators.required, 
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ]), 
        "amount": new FormControl(null, [
          Validators.required, 
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  getControls() {
    return (<FormArray>this.resourceForm.get('conceptualcheckpoints')).controls;
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
            "name": new FormControl(resource.name, Validators.required),
            "amount": new FormControl(conceptualcheckpoint.amount, [
              Validators.required, 
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          })
        );
      }
    }
  }

  this.resourceForm = new FormGroup({
    'name' : new FormControl(resourceName, Validators.required),
    'imagePath' : new FormControl(resourceImagePath, Validators.required),
    'description' : new FormControl(resourceDescription, Validators.required),
    'conceptualcheckpoints' : resourceConceptualCheckpoints
  });
}

