import { Component, OnInit, Input } from '@angular/core';

import { Resource } from '../../resource.model';

@Component({
  selector: 'app-resource-item',
  templateUrl: './resource-item.component.html',
  styleUrls: ['./resource-item.component.css']
})
export class ResourceItemComponent implements OnInit {
  @Input() resource: Resource;
  @Input() index: number;

  ngOnInit() {
  }
}
