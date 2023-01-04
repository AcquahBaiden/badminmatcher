import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onAddPlayer(){
    this.players.push({name:'', ranking:0})
  }

  onStartGame(){
    this.router.navigate(['/board'])
  }

}
