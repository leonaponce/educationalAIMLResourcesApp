import { Component, OnInit, Input } from '@angular/core';
import { Resource } from '../resource.model';

@Component({
  selector: 'app-resources-details',
  templateUrl: './resources-details.component.html',
  styleUrls: ['./resources-details.component.css']
})
export class ResourcesDetailsComponent implements OnInit {
  @Input() resource: Resource;
  constructor() { }

  ngOnInit() {
  }

}
