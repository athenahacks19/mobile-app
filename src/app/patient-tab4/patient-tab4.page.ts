import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { v4 } from 'uuid';
import { DirectLineService } from '../direct-line.service';
import * as moment from 'moment';
import { ConnectionStatus } from 'botframework-directlinejs';

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
  @ViewChild('messageArea') messageArea;
  messages: Array<Message> = [];
  message: string = '';
  lastMessageId;
  newConvo =true;

  constructor(private http: HttpClient, private directLine: DirectLineService) {
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
            avatar:  "assets/bot-chat.png"
          }
          this.addMessage(mes);
      }
    });

  }

  addMessage(message){
    this.messages = this.messages.concat(message);
    setTimeout(() => this.messageArea.scrollToBottom(), 100)
    
  }

  sendMessage() {
    if (this.message !== '') {
      const message = {
        id: null,
        type: 'outgoing',
        text:this.message,
        timestamp: null
      }
      this.addMessage(message);
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

  startConvo(){
    this.directLine.connectBot()
    .subscribe(event=>{
      console.log(event);
    })
    this.newConvo = false;
  }

  ngOnInit() {
    
  }
}
