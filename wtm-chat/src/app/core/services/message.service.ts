import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getMessages() {
    return of([{
      sender: {
        name: 'User1'
      },
      text: 'Hello World',
      date: new Date()
    }]);
  }
}
