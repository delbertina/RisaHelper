import { Component, OnInit } from '@angular/core';
import { CardData } from '../../../assets/shared/card-data.type';
import plugins from '../../../assets/plugins/plugins.json';

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent implements OnInit {

  pluginList: CardData[] = plugins["plugin-list"];

  constructor() { }

  ngOnInit(): void {
  }
}
