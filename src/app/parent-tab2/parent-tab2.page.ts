import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User, Slot } from '../interfaces';

@Component({
  selector: 'app-parent-tab2',
  templateUrl: './parent-tab2.page.html',
  styleUrls: ['./parent-tab2.page.scss'],
})
export class ParentTab2Page implements OnInit {
  rows: Slot[] = [{}];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.get('1234')
    .then((user: User) => {
      this.rows = user.schedule;
    });
  }

  addRow() {
    this.rows.push({});
  }

  submit() {
    this.dataService.saveSchedule('1234', this.rows);
  }

}
