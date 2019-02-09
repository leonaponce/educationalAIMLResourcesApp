import { Component, OnInit } from '@angular/core';

import { Resource } from '../resource.model';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.css']
})
export class ResourcesListComponent implements OnInit {
  resources: Resource[] = [
    new Resource('A test resource', 'This is simply a test', 'https://pixabay.com/photo-2228610/')
  ];
  constructor() { }

  ngOnInit() {
  }

}
