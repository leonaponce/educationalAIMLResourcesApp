import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Resource } from '../../resource.model';

@Component({
  selector: 'app-resources-item',
  templateUrl: './resources-item.component.html',
  styleUrls: ['./resources-item.component.css']
})
export class ResourcesItemComponent implements OnInit {
  @Input() resource: Resource;
  @Output() resourceSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.resourceSelected.emit();
  }
}
