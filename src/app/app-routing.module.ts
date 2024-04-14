import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KezdolapComponent } from './pages/kezdolap/kezdolap.component';
import { FooldalComponent } from './pages/fooldal/fooldal.component';
import { JegyComponent } from './pages/jegy/jegy.component';
import { KornyezetvedelemComponent } from './pages/kornyezetvedelem/kornyezetvedelem.component';
import { KapcsolatComponent } from './pages/kapcsolat/kapcsolat.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { sadminGuard } from '../app/sadmin.guard';

import { TicketComponent } from './additional-pages/ticket/ticket.component';
import { VersenyekComponent } from './additional-pages/versenyek/versenyek.component';
import { FishingShopComponent } from './additional-pages/fishing-shop/fishing-shop.component';
import { FishComponent } from './additional-pages/fish/fish.component';
import { EventsComponent } from './additional-pages/events/events.component';
import { AdditionalComponent } from './additional-pages/additional/additional.component';
import { ErrorComponent } from './pages/error/error.component';



const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'kezdolap', component:KezdolapComponent},
  {path:'fooldal', component:FooldalComponent},
  {path:'jegy', component:JegyComponent},
  {path:'kornyezetvedelem', component:KornyezetvedelemComponent},
  {path:'kapcsolat', component:KapcsolatComponent},
  {path:'profile', component:ProfileComponent},
  {path:"profile/:id", component:ProfileComponent},
  {path:'user-list',component:UserListComponent,canActivate:[sadminGuard]},
  {path:'register', component:RegisterComponent},


  {path:'ticket', component:TicketComponent},
  {path:'versenyek', component:VersenyekComponent},
  {path:'fishing-shop', component:FishingShopComponent},
  {path:'fish', component:FishComponent},
  {path:'events', component:EventsComponent},
  {path:'additional', component:AdditionalComponent},
  {path:'**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
