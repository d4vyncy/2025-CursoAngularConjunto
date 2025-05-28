import { HttpClient } from "@angular/common/http"
import { computed, effect, inject, Injectable, signal } from "@angular/core"
import { environment } from "@environments/environment";
import { GifMapper } from "../mapper/gif.mapper";
import { GiphyResponse } from "../interfaces/giphy.interfaces";
import { Gif } from "../interfaces/gif.interface";
import { map, tap } from "rxjs";

const GIF_KEY = 'gifs';

const loadFromLocalStorage = () => {
    const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}'; //record<string,gifs[]>
    const gifs = JSON.parse(gifsFromLocalStorage);
    console.log(gifs);
    return gifs;
}


@Injectable({ providedIn: 'root' })
export class GifService {

    
    private http = inject(HttpClient);

    TrendingGifs = signal<Gif[]>([]);
    TrendingGifsLoading = signal(true);

    searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
    searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

    constructor() {
        // this.loadTrendingGifs();
        console.log('Servicio creado');
    }

    saveGifsToLocalStorage = effect(() => {
        const historyString = JSON.stringify(this.searchHistory());
        localStorage.setItem(GIF_KEY, historyString);
    })

    loadTrendingGifs() {
        this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
            params: {
                api_key: environment.giphyApiKey,
                limit: 20,
            },
        }).subscribe((resp) => {

            const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
            this.TrendingGifs.set(gifs);
            console.log({ gifs });
        });
    }
    searchGifs(query: string) {
        return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
            params: {
                api_key: environment.giphyApiKey,
                limit: 20,
                q: query,
            },
        }).pipe(
            map(({ data }) => data),
            map((items) => GifMapper.mapGiphyItemsToGifArray(items)),

            //Historial
            tap(items => {
                this.searchHistory.update(history => ({
                    ...history,
                    [query.toLocaleLowerCase()]: items
                }))

            })
        );
        // .subscribe((resp)=>{

        //     const gifs=GifMapper.mapGiphyItemsToGifArray(resp.data);
        //     this.TrendingGifs.set(gifs);
        //     console.log('busqueda');
        //     console.log({gifs});
        // });
    }
    // searchGifs(query:string){
    //      this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
    //         params: {
    //             api_key: environment.giphyApiKey,
    //             limit: 20,
    //             q:query,
    //         },
    //     }).subscribe((resp)=>{

    //         const gifs=GifMapper.mapGiphyItemsToGifArray(resp.data);
    //         this.TrendingGifs.set(gifs);
    //         console.log('busqueda');
    //         console.log({gifs});
    //     });
    // }

    getHistoryGifs(query: string): Gif[] {
        return this.searchHistory()[query] ?? [];
    }
}