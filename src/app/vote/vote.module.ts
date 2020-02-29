import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoteRoutingModule } from './vote-routing.module';
import { VoteAllComponent } from './vote-all/vote-all.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [VoteAllComponent],
  imports: [
    CommonModule,
    VoteRoutingModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class VoteModule { }
