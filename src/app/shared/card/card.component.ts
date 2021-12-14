import { Component, Input, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { CardData } from '../../../assets/shared/card-data.type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() CardContent: CardData;

  constructor(private readonly sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  sanitizeURL(input: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(input);
  }

}
