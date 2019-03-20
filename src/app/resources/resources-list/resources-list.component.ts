import { Component, OnInit } from '@angular/core';

import { Resource } from '../resource.model';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.css']
})
export class ResourcesListComponent implements OnInit {
  resources: Resource[] = [
    new Resource("Kaggle Python Mini-Course", "Delve into Data Science's most important language", "https://pixabay.com/photo-2228610/"),
    new Resource("Kaggle Machine Learning Mini-Course", "Explore Data Science's hottest field", "https://pixabay.com/photo-2228610/"),
    new Resource("Kaggle Deep Learning Mini-Course", "Impress yourself with your new Tensorflow skills", "https://pixabay.com/photo-2228610/")
  ];
  constructor() { }

  ngOnInit() {
  }
  
  onResourceSelected() {
    
  }
}
