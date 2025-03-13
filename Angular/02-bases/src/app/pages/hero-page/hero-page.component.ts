import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  capitalizedName = computed(()=>
    this.name().toUpperCase()
  );

  getHeroDescription() {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero() {
    this.name.update(current => current + 'Spiderman');
    this.age.update(current => current + 22);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  chageAge() {
    this.age.update(current => 60);
  }

}
