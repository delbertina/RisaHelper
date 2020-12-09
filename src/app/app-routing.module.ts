import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { VoteRoutingModule } from './vote/vote-routing.module';


const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  VoteRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
