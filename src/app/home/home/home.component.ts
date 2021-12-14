import { Component, OnInit } from '@angular/core';
import { CardData } from '../../../assets/shared/card-data.type';
import events from '../../../assets/home/events.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentEvents: CardData[] = events["current-events"];
  pastEvents: CardData[] = events["past-events"];

  constructor() { }

  ngOnInit() {
  }
}
