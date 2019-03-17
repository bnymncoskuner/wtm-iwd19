import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    { name: 'User1', online: true },
    { name: 'User2', online: true },
    { name: 'User3', online: false },
    { name: 'User4', online: false },
    { name: 'User5', online: false }
  ];

  constructor() { }

  getUsers() {
    return of(this.users);
  }
}
