import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getMessages() {
    const messages = [{
      sender: {
        name: 'User1'
      },
      text: 'Hello World',
      date: new Date(),
      self: true
    }, {
      sender: {
        name: 'User2'
      },
      text: 'Hello User2',
      date: new Date(),
      self: false
    }]

    return of(messages);
  }
}
