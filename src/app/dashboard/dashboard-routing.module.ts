import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopHeroesComponent } from './top-heroes/top-heroes.component';

const routes: Routes = [
  { path: 'dashboard', component: TopHeroesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
