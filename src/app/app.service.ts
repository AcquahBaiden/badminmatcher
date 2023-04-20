import { Injectable, isDevMode } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { environment as dev } from 'src/environments/environment';
import { environment as prod } from 'src/environments/environment.prod';
import { AuthService } from './auth.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private database: AngularFireDatabase,
    private log: LoggerService,
    private auth: AuthService) { }
    currentGame:string = null

  async createNewGame(){
    const pushId = this.database.createPushId();
    const user = await this.auth.user()
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
    this.currentGame = pushId
    return pushId
  }
}
