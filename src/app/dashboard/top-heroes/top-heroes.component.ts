import { Component, OnInit } from '@angular/core';

import { HeroesService } from 'src/app/shared/heroes.service';
import { Hero } from 'src/app/shared/interface';

@Component({
  selector: 'app-top-heroes',
  templateUrl: './top-heroes.component.html',
  styleUrls: ['./top-heroes.component.css']
})
export class TopHeroesComponent implements OnInit {

  topHeroes: Hero[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.topHeroes = this.heroesService.getTopHeroes();
  }

}
