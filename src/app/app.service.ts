import { Injectable, isDevMode } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { objectVal } from '@angular/fire/database';
import { ref } from 'firebase/database';
import { map } from 'rxjs';
import { environment as dev } from 'src/environments/environment';
import { environment as prod } from 'src/environments/environment.prod';
import { AuthService } from './auth.service';
import { Player } from './interfaces/player.interface';
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

  async addPlayerToGame(game_id: string, player: Player){
    // check if the ids are the same
    const user = await this.auth.user()
    let path:string = ''
    if (user){
      path = user.uid
    }else{
      path = isDevMode() ? dev.userId: prod.userId
    }
    return this.database.list(path + '/players/').push(
      player
    )
  }

  getGame(gameId:string){
    this.database.object('games/'+gameId).valueChanges()
    .pipe(
      map((gamesRes)=>{
        return gamesRes
      })
    )

    
  }
}
