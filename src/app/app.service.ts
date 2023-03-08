import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  async createNewGame(){
    const id = await this.generateKey()
    return id
  }

  generateKey(){
    return new Promise(()=>'here we go')
  }
}
