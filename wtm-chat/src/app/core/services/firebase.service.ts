import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFireDatabase) {}

  push(dbName: string, data: any) {
    return this.db.list(dbName).push(data);
  }

  update(path: string, value: any) {
    return this.db.object(path).set(value);
  }

  list(dbName: string) {
    return this.db.list(dbName).valueChanges();
  }

  object(dbName: string) {
    return this.db.object(dbName).valueChanges();
  }
}
