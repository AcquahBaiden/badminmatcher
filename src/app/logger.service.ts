import { Injectable } from '@angular/core';
import { LogError } from './interfaces/logError.interface';
import { LogSuccess } from './interfaces/logSuccess.interface';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  
  success(info: LogSuccess): void {
    console.log(info)
  }

  error(info: LogError): void {

  }
}
