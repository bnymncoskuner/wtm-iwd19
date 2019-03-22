import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { take, flatMap, map } from 'rxjs/operators';

import { FirebaseService } from './firebase.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user;

  tableName = 'users';

  constructor(private fbService: FirebaseService) { 
  }

  createUser(name: string) {
    const user = {
      name: name, online: true
    };

    this.fbService.push(this.tableName, user).then(result => {
      this.user = {id: result.key, ...user};
    });
  }

  getUsers() {
    return this.fbService.listWithSnapshot(this.tableName)
      .pipe(map(snapshots => snapshots.map(data => {
        return {
          id: data.key,
          ...data.payload.val()
        }
      })));
  }

  logout() {
    if (this.user && this.user.id) {
      this.setUserStatus(false);
    }
  }

  setUserStatus(online: boolean) {
    this.fbService.update(`${this.tableName}/${this.user.id}/online`, online);
  }
}
