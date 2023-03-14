import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private database: AngularFireDatabase) { }

  async createNewGame(){
    // return new Promise(()=>'here we go')
    const pushId = await this.database.createPushId();
    return pushId
  }
}
