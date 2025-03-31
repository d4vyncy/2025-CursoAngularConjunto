import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../dragonball/character-app/character-add.component';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page-super',
  imports: [CharacterListComponent,CharacterAddComponent],
  templateUrl: './dragonball-page-super.component.html',
  styleUrl: './dragonball-page-super.component-super.css'
})
export class DragonballPageSuperComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },


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
