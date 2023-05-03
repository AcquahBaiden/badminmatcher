import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor(private appService: AppService, private router: Router, 
    private log: LoggerService) { }

  async onStartGame(){
    this.appService.createNewGame().then((id:string)=>{
      this.log.success({
        message: "Created new game",
        extras: {
          id
        }
      })
      console.log('navigating')
      this.router.navigate([`new/${id}`])
      // this.router.navigate(['new'], {queryParams:{
        // id
      // }, skipLocationChange: true}) // prevents proper page navigation
      // }})
    }).catch(()=>{
      this.log.error({
        message: "Error creating new game push id",
      })
    })
  }

}
