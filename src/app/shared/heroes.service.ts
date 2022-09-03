import { Injectable } from '@angular/core';

import { Hero } from './interface';
import * as heroes from '../../assets/data/heroes.json';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes: Hero[] = [];
    
  constructor() {
    this.heroes = (heroes as any).default;
  }

  getHeroes(): Hero[] {
    return this.heroes;
  }

  getTopHeroes(): Hero[] {
    return this.heroes.slice(0, 4);
  }

  updateHero(id: number, name: string): Hero[] {
    for (let index = 0; index < this.heroes.length; index ++) {
      if (id === this.heroes[index].id) {
        this.heroes[index].name = name;
        return this.heroes;
      }
    }
    return this.heroes;
  }

  getHero(id: number): Hero | null {
    for (let index = 0; index < this.heroes.length; index ++) {
      if (id === this.heroes[index].id) {
        return this.heroes[index];
      }
    }
    return null;
  }

}
