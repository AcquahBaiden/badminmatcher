import { Component, OnInit } from '@angular/core';
import { Court } from '../interfaces/court.interface'

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  courts: Court [] = [

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
