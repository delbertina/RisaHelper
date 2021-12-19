import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginsComponent } from './plugins/plugins.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PluginsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PluginsModule { }
