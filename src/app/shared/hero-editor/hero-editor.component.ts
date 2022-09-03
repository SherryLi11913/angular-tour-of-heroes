import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { HeroesService } from '../heroes.service';
import { Hero } from '../interface';

@Component({
  selector: 'app-hero-editor',
  templateUrl: './hero-editor.component.html',
  styleUrls: ['./hero-editor.component.css']
})
export class HeroEditorComponent implements OnInit {
  hero: Hero | null = null;

  constructor(private location: Location,
              private heroesService: HeroesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.hero = this.heroesService.getHero(parseInt(routeParams['id']));

      if (!this.hero) {
        this.goBack();
      }
    });
  }

  goBack() {
    this.location.back();
  }

  updateHero(name: string) {
    this.heroesService.updateHero(this.hero?.id || -1, name);
  }

}
