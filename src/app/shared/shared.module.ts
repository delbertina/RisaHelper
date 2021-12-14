import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    MatCardModule,
    CommonModule
  ],
  exports: [
    CardComponent
  ]
})
export class SharedModule { }
