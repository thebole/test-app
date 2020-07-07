import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(CalculatorService);
  // });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers', () => {
    const calculator = new CalculatorService(new LoggerService());
    const result = calculator.add(2,3);

    expect(result).toBe(5);

    pending();
  });

  it('should subtract two numbers', () => {
    const calculator = new CalculatorService(new LoggerService());
    const result = calculator.subtract(2,3);

    expect(result).toBe(-1);
  });
});
