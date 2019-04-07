import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-tab2',
  templateUrl: './parent-tab2.page.html',
  styleUrls: ['./parent-tab2.page.scss'],
})
export class ParentTab2Page implements OnInit {
  rows: any[] = [{}];

  constructor() { }

  ngOnInit() {
  }

  addRow() {
    this.rows.push({});
  }

  submit() {
    console.log(this.rows)
  }

}
