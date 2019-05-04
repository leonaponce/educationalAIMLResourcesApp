import { Component, OnInit, Input } from '@angular/core';

import { Resource } from '../../resource.model';

@Component({
  selector: 'app-resource-item',
  templateUrl: './resourceitem.component.html',
  styleUrls: ['./resourceitem.component.css']
})
export class ResourceItemComponent implements OnInit {
  @Input() resource: Resource;
  @Input() index: number;

  ngOnInit() {
  }
}
