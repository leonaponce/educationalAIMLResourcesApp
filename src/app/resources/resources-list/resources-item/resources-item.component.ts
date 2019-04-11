import { Component, OnInit, Input } from '@angular/core';

import { Resource } from '../../resource.model';
import { ResourceService } from '../../resource.service';

@Component({
  selector: 'app-resources-item',
  templateUrl: './resources-item.component.html',
  styleUrls: ['./resources-item.component.css']
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
