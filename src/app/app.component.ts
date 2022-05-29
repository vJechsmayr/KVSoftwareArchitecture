import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KVSoftwareArchitectureSS2022';

  loadedFeature = 'candidate';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
