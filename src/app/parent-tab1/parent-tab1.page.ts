import { Component, OnInit } from '@angular/core';
import * as atlas from 'azure-maps-control';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-parent-tab1',
  templateUrl: './parent-tab1.page.html',
  styleUrls: ['./parent-tab1.page.scss'],
})
export class ParentTab1Page implements OnInit {

  constructor() { }

  ngOnInit() {
    const map = new atlas.Map('myMap', {
      center: [-122.33, 47.6],
      zoom: 12,
      authOptions: {
        authType: 'subscriptionKey' as atlas.AuthenticationType,
        subscriptionKey: environment.mapKey
      },
      autoResize: true
    });
    map.resize(1000, 300);
  }

}
