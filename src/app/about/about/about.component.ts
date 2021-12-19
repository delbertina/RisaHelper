import { Component, OnInit } from '@angular/core';
import { CardData } from '../../../assets/shared/card-data.type';
import about from '../../../assets/about/about.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutList: CardData[] = about["about-list"];

  constructor() { }

  ngOnInit(): void {
  }

}
