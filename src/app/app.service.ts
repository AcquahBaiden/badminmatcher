import { Injectable, isDevMode } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { environment as dev } from 'src/environments/environment';
import { environment as prod } from 'src/environments/environment.prod';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private database: AngularFireDatabase, 
    private auth: AngularFireAuth,
    private log: LoggerService) { }

  async createNewGame(){
    const pushId = this.database.createPushId();
    const user = await this._user()
    let path:string = ''
    if (user){
      path = user.uid
    }else{
      path = isDevMode() ? dev.userId: prod.userId
    }
    try {
      this.database.list(path).set(pushId,{
        uid: pushId,
        title: 'New game'
      })
    } catch (error) {
      this.log.error({
        message: "Database error",
        extras: error
      })
    }
    return pushId
  }

  async getUserId(){
    /**
     * returns userId or public id when no user
     */
    //get user id
    // or return defined createPusId path for environment
    const user = await this._user()
    if(user){
      return user
    }
    // return isDevMode() ? dev.userId: prod.userId
    return 'asdf'
  }

  async _user(){
    return this.auth.currentUser
    // const user = await this.auth.currentUser
    // if(user){
    //   return user.uid
    // }else{
    //   return null
    // }
  }
}
