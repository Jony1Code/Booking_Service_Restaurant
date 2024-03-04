import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  tables: { number: number; seats: number }[] = [
    { number: 1, seats: 2 },
    { number: 2, seats: 4 },
    { number: 3, seats: 6 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
