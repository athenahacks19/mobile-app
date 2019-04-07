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

   subscribeBot() {
    // Watch incoming messages from our bot

    // 'BotName' will be sent by your bot
    return directLine.activity$;
  }
}
