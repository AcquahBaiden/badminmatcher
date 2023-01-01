import { Component, OnInit } from '@angular/core';
import { Player } from '../interfaces/player.interface';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
  players: Player [] = [{name:'',ranking:0}]
  constructor() { }

  ngOnInit(): void {
  }
  onAddPlayer(){
    this.players.push({name:'', ranking:0})
  }

}
