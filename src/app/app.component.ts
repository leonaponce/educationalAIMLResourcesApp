import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'resource'; //allows us to store the feature
  
  onNagivate(feature: string) {
    this.loadedFeature = feature;
  }
}
