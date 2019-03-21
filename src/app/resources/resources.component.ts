import { Component, OnInit } from '@angular/core';
import { Resource } from './resource.model';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  selectedResource: Resource;
  
  constructor() { }

  ngOnInit() {
  }

}
 