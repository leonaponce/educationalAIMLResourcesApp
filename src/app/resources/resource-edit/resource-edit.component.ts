import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-edit',
  templateUrl: './resource-edit.component.html',
  styleUrls: ['./resource-edit.component.css']
})
export class ResourceEditComponent implements OnInit {
  id: number;
  editMode

  constructor() { }

  ngOnInit() {
    this.route.params
       .subscribe(
         (params: Params) => {
            this.id = +params['id'];
            this.editMode = params['id'] !=null;
         }
       );
  }

}