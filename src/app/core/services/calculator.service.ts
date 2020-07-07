import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private logger: LoggerService) { }

  add(number1: number, number2: number){
    this.logger.log('Addition Operation called');
    return number1 + number2;
  }

  subtract(number1: number, number2: number) {
    this.logger.log('Subtraction Operation called');
    return number1 - number2;
  }
}
