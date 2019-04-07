import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@Component({
  selector: 'app-patient-tab3',
  templateUrl: './patient-tab3.page.html',
  styleUrls: ['./patient-tab3.page.scss'],
})
export class PatientTab3Page implements OnInit {
  myText = new FormControl('');
  lastScore: number;

  constructor(
    private zone: NgZone,
    private speech: SpeechRecognition,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  submit() {
    this.dataService.analyzeText(this.myText.value)
    .then((score: number) => {
      this.lastScore = score;
    });
  }

  talk() {
    this.speech.hasPermission()
    .then(permission => {
      if (permission) {
        this.speech.startListening({
          matches: 3
        })
        .subscribe(
          (matches: string[]) => {
            this.myText.setValue(matches[0]);
            // Some weird thing happens here.
            setTimeout(() => {
              this.zone.run(() => {
                this.submit();
              });
            }, 100);
          },
          (onerror) => console.log('error:', onerror)
        );
      } else {
        this.speech.requestPermission();
      }
    });
  }

}
