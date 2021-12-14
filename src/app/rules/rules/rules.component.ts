import { Component, OnInit } from '@angular/core';
import { CardData } from '../../../assets/shared/card-data.type';
import rules from '../../../assets/rules/rules.json';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  ruleList: CardData[] = rules["rule-list"];

  constructor() { }

  ngOnInit(): void {
  }
}
