import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { ClubsComponent } from './clubs/clubs/clubs.component';
import { ContactComponent } from './contact/contact/contact.component';
import { HomeComponent } from './home/home/home.component';
import { MapComponent } from './map/map/map.component';
import { PluginsComponent } from './plugins/plugins/plugins.component';
import { RulesComponent } from './rules/rules/rules.component';
import { VoteRoutingModule } from './vote/vote-routing.module';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'rules', component: RulesComponent},
  { path: 'plugins', component: PluginsComponent},
  { path: 'clubs', component: ClubsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'map', component: MapComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  VoteRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
