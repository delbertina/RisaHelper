import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoteRoutingModule } from './vote-routing.module';
import { VoteAllComponent } from './vote-all/vote-all.component';


@NgModule({
  declarations: [VoteAllComponent],
  imports: [
    CommonModule,
    VoteRoutingModule
  ]
})
export class VoteModule { }
