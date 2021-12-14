import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RulesComponent } from './rules/rules.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RulesComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class RulesModule { }
