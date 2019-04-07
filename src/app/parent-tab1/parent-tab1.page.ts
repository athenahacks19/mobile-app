import { Component, OnInit } from '@angular/core';
import * as atlas from 'azure-maps-control';
import { environment } from '../../environments/environment';
import { DataService } from '../data.service';
import { User } from '../interfaces';

@Component({
  selector: 'app-parent-tab1',
  templateUrl: './parent-tab1.page.html',
  styleUrls: ['./parent-tab1.page.scss'],
})
export class ParentTab1Page implements OnInit {
  map: atlas.Map;
  patientMarker: atlas.HtmlMarker;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.map = new atlas.Map('myMap', {
      center: [-122.33, 47.6],
      zoom: 12,
      authOptions: {
        authType: 'subscriptionKey' as atlas.AuthenticationType,
        subscriptionKey: environment.mapKey
      },
      autoResize: true
    });

    this.map.events.add('ready', () => {
      this.patientMarker = new atlas.HtmlMarker({
        color: 'DodgerBlue',
        position: [0, 0]
      });
      this.map.markers.add(this.patientMarker);
      this.getUser();
      setInterval(() => {
        this.getUser();
      }, 1000);
    });
  }

  getUser() {
    this.dataService.get('1234')
    .then((user: User) => {
      const lat = Number(user.location.lat);
      const lon = Number(user.location.lon);
      this.patientMarker.setOptions({
        position: [lon, lat]
      });
      this.map.setCamera({
        center: [lon, lat]
      });
    });
  }

}
