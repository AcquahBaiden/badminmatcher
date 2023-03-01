import { Component, OnInit } from '@angular/core';
import { Court } from '../interfaces/court.interface'
import { Player } from '../interfaces/player.interface';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  // courts: Court [] = [
  //   {
  //     team_one: {
  //       players:[{name:'Jason bourne', ranking: 10},{'name':'Sam Jonah', ranking:30}],
  //       'score':0
  //     },
  //     "team_two": {
  //       players:[{name:'Jane Doe', ranking: 10},{'name':'Frannk Pair', ranking:30}],
  //       'score':0
  //     }
  //   },
  //   {
  //     team_one: {
  //       players:[{name:'Fred Sam', ranking: 10},{'name':'Jane French', ranking:30}],
  //       'score':0
  //     },
  //     "team_two": {
  //       players:[{name:'Andrew Man', ranking: 10},{'name':'Tony Mate', ranking:30}],
  //       'score':0
  //     }
  //   },
  //   {
  //     team_one: {
  //       players:[{name:'Mike Dean', ranking: 10},{'name':'Kelvin Mite', ranking:30}],
  //       'score':0
  //     },
  //     "team_two": {
  //       players:[{name:'sean Barrister', ranking: 10},{'name':'Francis Bark', ranking:30}],
  //       'score':0
  //     }
  //   }
  // ]
  // offcourt: Player[] = [{name:'Man NotHot', ranking: 10},{'name':'JAne Reeding', ranking:30}]
  // constructor() { }

  ngOnInit(): void {
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex,
  //     );
  //   }
  // }

  onCourt = [
    'John Wick',
    'Captain America',
    'Jason Bourne',
    'Nathan Cruise'
  ];

  offCourt = [
    'Iron Man',
    'Super man',
    'Black Widow',
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
