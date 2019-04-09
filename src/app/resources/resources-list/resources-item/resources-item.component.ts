import { Component, OnInit, Input } from '@angular/core';

import { Resource } from '../../resource.model';

@Component({
  selector: 'app-resources-item',
  templateUrl: './resources-item.component.html',
  styleUrls: ['./resources-item.component.css']
})
export class ResourcesItemComponent implements OnInit {
  @Input() resource: Resource;
  
  constructor(private resourceService: ResourcesService) { }

  ngOnInit() {
  }

  onSelected() {
    this.resourceService.recipeSelected.emit(this.resource);
  }
}
