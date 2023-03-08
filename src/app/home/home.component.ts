import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private appService: AppService, private router: Router, 
    private log: LoggerService) { }

  ngOnInit(): void {
  }
  async onStartGame(){
    console.log('clicked')
    try {
      const new_game_id = await this.appService.createNewGame()
        this.log.success({
          message: "Created new game",
          extras: {
            id: new_game_id
          }
        })
    } catch (error) {
      this.log.error({
        message: "Error creating new game push id",
      })
      return
    }
    
    
  }

}
