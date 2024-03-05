import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public tables: Array<any> = [
    { name: 'Стол 1', seats: 6, size: 'large', isReserved: false },
    { name: 'Стол 2', seats: 6, size: 'large', isReserved: false },
    { name: 'Стол 3', seats: 6, size: 'large', isReserved: true },
    { name: 'Стол 4', seats: 6, size: 'large', isReserved: false },
    { name: 'Стол 5', seats: 6, size: 'large', isReserved: true },
    { name: 'Стол 6', seats: 4, size: 'medium', isReserved: false },
    { name: 'Стол 7', seats: 4, size: 'medium', isReserved: false },
    { name: 'Стол 8', seats: 4, size: 'medium', isReserved: true },
    { name: 'Стол 9', seats: 4, size: 'medium', isReserved: false },
    { name: 'Стол 10', seats: 2, size: 'small', isReserved: false },
    { name: 'Стол 11', seats: 2, size: 'small', isReserved: false },
    { name: 'Стол 12', seats: 2, size: 'small', isReserved: true },
  ];

  constructor() {}

  ngOnInit(): void {}
}
