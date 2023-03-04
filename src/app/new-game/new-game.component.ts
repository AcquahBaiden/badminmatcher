import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../app.service';
import { Player } from '../interfaces/player.interface';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
  players: Player [] = [
    {name:"John Smith", ranking:23},
    {name:"Jack Ryan", ranking:70},
    {name:"Sarah Snow", ranking:120},
    {name:"Philip Water", ranking:330},
  ]
  constructor(private router: Router, private appService: AppService, private params: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onAddPlayer(){
    this.players.push({name:'', ranking:0})
  }

  async onStartGame(){
    const new_game_id = await this.appService.createNewGame()
    if(new_game_id){
      this.router.navigate(['/board'], {queryParams: {id: '12345'}})
    }else{

    }
    
  }

}
