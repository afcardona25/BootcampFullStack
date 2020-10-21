import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CardsComponent } from './cards/cards.component';
import { ScriptManagerService } from './script-manager.service';
import { PokeapiComponent } from './pokeapi/pokeapi.component';

const appRoutes: Routes = [
  { path: 'rickAndMorty', component: CardsComponent },
  { path: 'pokeApi', component: PokeapiComponent },
  { path: '', redirectTo: 'pokeApi', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardsComponent,
    PokeapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ScriptManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
