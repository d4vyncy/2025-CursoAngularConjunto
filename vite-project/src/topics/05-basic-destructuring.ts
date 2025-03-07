interface AudioPlayer{
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details;
}

interface Details{
    author:string;
    year:number;
}

const audioPlayer:AudioPlayer={
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}


const {song:anotherSong,songDuration:duracion
    ,details:{
        author:autor
    }
} = audioPlayer;
// console.log('autor: ', autor);

// console.log('duracion: ', duracion);
// console.log('Song1: ', anotherSong);

// console.log('Song: ', audioPlayer.song);
// console.log('songDuration: ', audioPlayer.songDuration);
// console.log('author: ', audioPlayer.details.author);

// const dbz: string[]=['Goku','Vegeta','Trunk'];
//console.log('Persona 3:',dbz[3] || 'no eixste el personaje');


const [p1,p2,trunks]: string[]=['Goku','Vegeta','Trunk'];
console.log('Persona 3:',trunks || 'no eixste el personaje');
console.log('Persona 2:',p2 || 'no eixste el personaje');



export {};