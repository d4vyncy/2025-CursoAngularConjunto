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

export {};