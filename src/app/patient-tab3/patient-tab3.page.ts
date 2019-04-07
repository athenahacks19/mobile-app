import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { v4 } from 'uuid';
import { DirectLineService } from '../direct-line.service';

interface Message {
  id?: string;
  text: string;
  timeStamp?: Date;
  type: string;
}

@Component({
  selector: 'app-patient-tab3',
  templateUrl: './patient-tab3.page.html',
  styleUrls: ['./patient-tab3.page.scss'],
})
export class PatientTab3Page implements OnInit {
  messages: Array<Message> = [];
  message: string = '';
  lastMessageId;

  constructor(private http: HttpClient, private directLine: DirectLineService) { }

  sendMessage() {
    if (this.message !== '') {
      const message = {
        id: v4(),
        type: 'outgoing',
        text:this.message
      }
      this.messages = this.messages.concat(message);
      this.message = '';
      this.directLine.sendMessageToBot(this.message)
      .subscribe(
        id => console.log("Posted activity, assigned ID ", id),
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
            text: (<Message>message).text
          }
          this.messages = this.messages.concat(mes);
        }
      });
  }

}
