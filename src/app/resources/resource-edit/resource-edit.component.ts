import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

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
         }
       );
  }

  private initForm() {
    let resourceName = "";

    if (this.editMode) {
      const resource = this.resourceService.getResource(this.id);
      resourceName = this.
    }

  });

}
private initForm() {
  let resourceName = 
  this.resourceForm = new FormGroup({
    "name" : new FormControl()
  });
}
}

