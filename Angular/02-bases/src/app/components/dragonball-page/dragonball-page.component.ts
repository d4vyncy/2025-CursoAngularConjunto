import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [NgClass],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {

  name = signal('Gohan');
  power = signal(100);

  characters= signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },    
    { id: 3, name: 'Yamcha', power: 500 },
    { id: 4, name: 'Piccolo', power: 3000 },
    
  ]);

  // powerClasses = computed(()=>{
  //   return {
  //     'text-danger': true
  //   }
  // });

}
