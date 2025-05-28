import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {

  name = signal('');
  
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegeta', power: 8000 },
    // { id: 3, name: 'Yamcha', power: 500 },
    // { id: 4, name: 'Piccolo', power: 3000 },

  ]);
  addCharacter() {
    console.log(this.name(), this.power());

    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    // this.characters().push(newCharacter);
    this.characters.update((list) =>
      [...list, newCharacter]);
    this.resetFields();

  }
  // powerClasses = computed(()=>{
  //   return {
  //     'text-danger': true
  //   }
  // });

  resetFields() {
    this.name.set('');
    this.power.set(0);

  }
}
