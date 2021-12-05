import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { EventsData } from '../../../assets/home/home.type';
import events from '../../../assets/home/events.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentEvents: EventsData[] = events["current-events"];
  pastEvents: EventsData[] = events["past-events"];

  constructor(private readonly sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  sanitizeURL(input: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(input);
  }

}
