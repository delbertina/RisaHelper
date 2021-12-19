import { Component, OnInit } from '@angular/core';
import { CardData } from '../../../assets/shared/card-data.type';
import clubs from '../../../assets/clubs/clubs.json';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {

  clubList: CardData[] = clubs["club-list"];

  constructor() { }

  ngOnInit(): void {
  }

}
