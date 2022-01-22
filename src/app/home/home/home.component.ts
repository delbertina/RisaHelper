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

  discordURL = "https://bit.ly/MagnaRisaDiscord";

  constructor() { }

  ngOnInit() {
  }

  public openNewTab(url: string): void {
    window.open(url, '_blank');
  }

  public randomOnline(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
