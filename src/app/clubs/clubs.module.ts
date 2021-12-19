import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubsComponent } from './clubs/clubs.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ClubsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ClubsModule { }
