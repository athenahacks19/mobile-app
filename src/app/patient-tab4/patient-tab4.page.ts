import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { v4 } from 'uuid';
import { DirectLineService } from '../direct-line.service';
import * as moment from 'moment';

interface Message {
  id: string;
  text: string;
  timestamp: string;
  type: string;
  avatar?:string;
}

@Component({
  selector: 'app-patient-tab4',
  templateUrl: './patient-tab4.page.html',
  styleUrls: ['./patient-tab4.page.scss'],
})
export class PatientTab4Page implements OnInit {
  messages: Array<Message> = [];
  message: string = '';
  lastMessageId;

  constructor(private http: HttpClient, private directLine: DirectLineService) { }
  sendMessage() {
    if (this.message !== '') {
      const message = {
        id: null,
        type: 'outgoing',
        text:this.message,
        timestamp: null
      }
      this.messages = this.messages.concat(message);
      let index = this.messages.length - 1;
      this.directLine.sendMessageToBot(this.message)
      .subscribe(activity => {
        console.log("Posted activity, assigned ID ", activity.id)
        this.messages[index].id = activity.id;
        this.messages[index].timestamp = moment(activity.timestamp).format('h:mm a');
        this.message = '';
      },
        error => console.log('Error posting activity', error)
      );
      
    }
  }

  // This method adds classes to the element based on the message type
  getClasses(messageType) {
    return {
      incoming: messageType === 'incoming',
      outgoing: messageType === 'outgoing',
    };
  }

  ngOnInit() {
    this.directLine.subscribeBot()
    .subscribe(
      message => {
        console.log(message);
        if(message.from.id === 'autis-bot'){
          const mes = {
            id: message.id,
            type: 'incoming',
            text: (<Message><unknown>message).text,
            timestamp: moment((<Message><unknown>message).timestamp).format('h:mm a'),
            avatar:  "https://i.imgur.com/8epfNKB.png"
          }
          console.log(mes);
          this.messages = this.messages.concat(mes);
      }
    });
  }
}
