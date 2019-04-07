import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-patient-tab3',
  templateUrl: './patient-tab3.page.html',
  styleUrls: ['./patient-tab3.page.scss'],
})
export class PatientTab3Page implements OnInit {
  myText = new FormControl('');
  lastScore: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  submit() {
    this.dataService.analyzeText(this.myText.value)
    .then((score: number) => {
      this.lastScore = score;
    });
  }

}
