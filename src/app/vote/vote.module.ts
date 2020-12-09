import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteRoutingModule } from './vote-routing.module';
import { VoteAllComponent, VoteCookieInfoDialog } from './vote-all/vote-all.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    VoteAllComponent,
    VoteCookieInfoDialog
  ],
  imports: [
    CommonModule,
    VoteRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule
  ],
  entryComponents: [VoteCookieInfoDialog]
})
export class VoteModule { }
