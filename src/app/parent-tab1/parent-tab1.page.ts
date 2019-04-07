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

    this.getUser();
    setInterval(() => {
      this.getUser();
    }, 1000);
  }

  getUser() {
    this.dataService.get('1234')
    .then((user: User) => {
      this.map.setCamera({
        center: [ Number(user.location.lon), Number(user.location.lat) ]
      });
    });
  }

}
