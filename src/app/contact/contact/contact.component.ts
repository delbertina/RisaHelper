import { Component, OnInit } from '@angular/core';
import { CardData } from '../../../assets/shared/card-data.type';
import contact from '../../../assets/contact/contact.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactList: CardData[] = contact["contact-list"];

  constructor() { }

  ngOnInit(): void {
  }

}
