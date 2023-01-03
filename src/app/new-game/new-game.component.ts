import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }
  onAddPlayer(){
    this.players.push({name:'', ranking:0})
  }

}
