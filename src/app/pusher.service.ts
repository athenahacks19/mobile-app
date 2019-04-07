import { Injectable } from '@angular/core';
import { DirectLine } from 'botframework-directlinejs';
import * as Pusher from 'pusher-js';
import { environment } from '../environments/environment';


const directLine = new DirectLine({
  secret: environment.DIRECTLINE_KEY,
  webSocket: true
});

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  channel;

  constructor() { 
    var pusher = new Pusher(environment.PUSHER_KEY, {
      cluster: environment.PUSHER_CLUSTER,
      encrypted: true,
    });
    this.channel = pusher.subscribe('chat-bot');
  }

  // public sendMessageToBot(text: string) {    
  //   directLine
  //     .postActivity({
  //       from: { id: "uuid"},
  //       type: 'message',
  //       text: text
  //     })
  //     .subscribe(
  //       id => console.log("Posted activity, assigned ID ", id),
  //       error => console.log('Error posting activity', error)
  //     );
  // }


  public init() {
    return this.channel;
  }
}
