import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';

// Components
import { HeroEditorComponent } from './hero-editor/hero-editor.component';
import { HeaderComponent } from './header/header.component';

// Services
import { HeroesService } from './heroes.service';

@NgModule({
  declarations: [
    HeroEditorComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderComponent,
    HeroEditorComponent
  ],
  providers: [
    HeroesService
  ]
})
export class SharedModule { }
