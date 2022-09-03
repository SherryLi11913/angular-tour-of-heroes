import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroEditorComponent } from './hero-editor/hero-editor.component';

const routes: Routes = [
  { path: 'hero/:id', component: HeroEditorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
