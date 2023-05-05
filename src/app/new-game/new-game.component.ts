import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Game } from '../interfaces/game.interface';
import { Player } from '../interfaces/player.interface';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
  game: Game
  players: Player [] = [
  ]
  gameId:string = null
  newPlayerForm = new FormGroup({
    name: new FormControl(''),
    ranking: new FormControl('')
  })
  constructor(private router: Router, 
    private appService: AppService, 
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap=>{
      this.gameId = paramMap.get('gameId')
      this.appService.getGame(this.gameId)
      .subscribe((gameRes)=>{
        this.game = gameRes
        const players = gameRes.players
        for(const key in players){
          if(players.hasOwnProperty(key)){
            this.players.push({ ...players[key]})
          }
        }
        
      })
    }
    )
  }
  onAddPlayer(){
    this.players.push({name:'', ranking:0})
    const player: Player = {
      "name": this.newPlayerForm.value.name, 
      "ranking": parseInt(this.newPlayerForm.value.ranking)
    }
    console.log()
    this._addPlayer(player)
    .then(()=>{
      // update form
    })
    .catch(()=>{
      //show error
    })
  }

  private _addPlayer(player: Player){
   return this.appService.addPlayerToGame(this.gameId, player)
  }
}
