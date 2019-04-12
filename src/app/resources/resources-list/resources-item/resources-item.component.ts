import { Component, OnInit, Input } from '@angular/core';

import { Resource } from '../../resource.model';

@Component({
  selector: 'app-resources-item',
  templateUrl: './resources-item.component.html',
  styleUrls: ['./resources-item.component.css']
})
export class ResourcesItemsComponent implements OnInit {
  @Input() resource: Resource;

  ngOnInit() {
  }

}
