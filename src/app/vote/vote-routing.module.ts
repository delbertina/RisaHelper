import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoteAllComponent } from './vote-all/vote-all.component';


const routes: Routes = [
  { path: 'vote', component: VoteAllComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoteRoutingModule { }
