import { Component, OnInit, Input } from '@angular/core';

import { Resource } from '../../resource.model';
import { ResourceService } from '../../resource.service';

@Component({
  selector: 'app-resource-item',
  templateUrl: './resource-item.component.html',
  styleUrls: ['./resource-item.component.css']
})
export class ResourceItemComponent implements OnInit {
  @Input() resource: Resource;
  
  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
  }

  onSelected() {
    this.resourceService.resourceSelected.emit(this.resource);
  }

}
