import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  declarations: [
    HeroesListComponent
  ],
  imports: [
    HeroesRoutingModule,
    CommonModule
  ]
})
export class HeroesModule { }
