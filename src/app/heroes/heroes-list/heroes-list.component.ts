import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/shared/heroes.service';

import { Hero } from 'src/app/shared/interface';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

}
