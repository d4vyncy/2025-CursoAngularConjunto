import { effect, Injectable, signal } from "@angular/core";
import { Character } from "../interfaces/character.interface";

const loadFromLocalStorage=():Character[] =>{
    const characters=localStorage.getItem('dav') ;
    // if(characters){
    //     const localStorageObj=JSON.parse(characters);        
    // }
    return characters? JSON.parse(characters):[];
}

@Injectable({ providedIn: 'root' })
export class DragonballService {
    characters = signal<Character[]>(loadFromLocalStorage());
    // characters = signal<Character[]>([
    //     { id: 1, name: 'Goku', power: 9001 },
    //     { id: 2, name: 'Vegeta', power: 8000 },
    // ]);

    saveToLocalStorage= effect(()=>{
        // console.log(`agregar`)
        localStorage.setItem('dav',JSON.stringify( this.characters()));
    });

    addCharacter(character: Character) {
        this.characters.update(
            (list) => [...list, character]
        );
    }

}

