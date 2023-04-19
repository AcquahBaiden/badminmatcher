import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { environment as dev } from 'src/environments/environment';
import { environment as prod } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private database: AngularFireDatabase, private auth: AngularFireAuth) { }

  async createNewGame(){
    // return new Promise(()=>'here we go')
    const pushId = await this.database.createPushId();
    
    return pushId
  }

  async getUserId(){
    /**
     * returns userId or public id when no user
     */
    //get user id
    // or return defined createPusId path for environment
    const user = this._user
    if(user){
      return user
    }
    return process.env.production ? prod.userId : dev.userId
  }

  async _user(){
    const user = await this.auth.currentUser
    if(user){
      return user.uid
    }else{
      return null
    }
  }
}
