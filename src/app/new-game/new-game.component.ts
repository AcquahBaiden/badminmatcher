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
    {name:"John Smith", ranking:23},
    {name:"Jack Ryan", ranking:70},
    {name:"Sarah Snow", ranking:120},
    {name:"Philip Water", ranking:330},
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
        console.log('gameRes:', this.game)
      })
    }
    )
  }
  onAddPlayer(){
    this.players.push({name:'', ranking:0})
    const name = 'Jone'
    const ranking = 43
    const player: Player = {
      name, ranking
    }
    console.log(this.newPlayerForm.value)
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
