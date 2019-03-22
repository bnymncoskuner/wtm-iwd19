import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FirebaseService } from './firebase.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  tableName = 'messages';

  constructor(private fbService: FirebaseService, private userService: UserService) { }

  getMessages(): Observable<any> {
    return this.fbService.list(this.tableName)
      .pipe(
        map(messages => messages.map((message: any) => {
          return {
            ...message,
            date: new Date(message.date)
          }
        }))
      );
  }

  sendMessage(message) {
    const newMessage = {
      sender: this.userService.user,
      text: message,
      date: new Date().toString()
    };

    this.fbService.push(this.tableName, newMessage);
  }
}
