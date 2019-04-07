import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../interfaces';

@Component({
  selector: 'app-patient-tab1',
  templateUrl: './patient-tab1.page.html',
  styleUrls: ['./patient-tab1.page.scss'],
})
export class PatientTab1Page implements OnInit {
  user: User;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.get('1234')
    .then((user: User) => {
      this.user = user;
    });
  }

}
