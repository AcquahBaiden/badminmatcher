import { Component, OnInit } from '@angular/core';
import { Court } from '../interfaces/court.interface'
import { Player } from '../interfaces/player.interface';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Game } from '../interfaces/game.interface';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  gameId:string
  game: Game
  players: Player[]
  offCourt: Player[]
  onCourt: Player[]
  number_of_courts: Number = 3

  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  
  constructor(private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap=>{
      this.gameId = paramMap.get('gameId')
      this.appService.getGame(this.gameId)
      .subscribe((gameRes)=>{
        this.game = gameRes
        const players = gameRes.players
        this.players = []
        for(const key in players){
          if(players.hasOwnProperty(key)){
            this.players.push({ ...players[key]})
            // this.offCourt.push({...players[key]})
          }
        }
        this.generateMatchUps()
      })
    }
    )
  }

  generateMatchUps(): void{
    //chunks of two,
    //set number of courts
    const split = this.splitIntoChunk(this.players,2)
    //@ts-ignore.
    this.offCourt = split[0]
    //@ts-ignore.
    this.onCourt = split[1]
    console.log('splitlength', split.length)
    for(let i=0; i < split.length; i++){
      console.log('i:', i)
    }
    console.log('split:',split)
  }

  // program to split array into smaller chunks


  splitIntoChunk(arr:Player[], chunk):Player[] {
    const bigarray:any  = []
  while(arr.length > 0) {
      let tempArray;
      tempArray = arr.splice(0, chunk);
      console.log(tempArray);
      bigarray.push(tempArray)
  }
  return bigarray
}

}
