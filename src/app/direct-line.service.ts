import { Injectable } from '@angular/core';
import { DirectLine } from 'botframework-directlinejs';
import { environment } from '../environments/environment';
import { Observable, Subject } from '../../node_modules/rxjs';

const directLine = new DirectLine({
  secret: environment.DIRECTLINE_KEY,
  webSocket: true
});

@Injectable({
  providedIn: 'root'
})
export class DirectLineService {

  constructor() { }

   sendMessageToBot(text: string) {
    return directLine
    .postActivity({
      from: { id: "uuid"},
      type: 'message',
      text: text,
    });
  }

  connectBot(){
    return directLine
    .postActivity({
      from: { id: "uuid"},
      name: "startConversation",
      type: 'event',
      value: true,
    });
  }

  checkConnection(){
    //console.log(directLine.getSessionId())
    return directLine.connectionStatus$;
  }

   subscribeBot() {
    // Watch incoming messages from our bot
    return directLine.activity$;
  }
}
