import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Resource } from '../resource.model';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.css']
})
export class ResourcesListComponent implements OnInit {
  @Output()resourceWasSelected = new EventEmitter<Resource>();
  resources: Resource[];

  constructor(private resourcesService: ResourcesService) { }

  ngOnInit() {
     this.resources = this.resourcesService.getResources();
  }
  
  onResourceSelected(resource: Resource) {
    this.resourceWasSelected.emit(resource);
  }
  
}

