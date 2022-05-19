import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getEpisodes() {
        return this.http.get('https://8100-eduardo2804-breakingbad-wxr3umvemcb.ws-eu45.gitpod.io/assets/episodes.json')
    }

    getEpisode(id) {
        return this.http.get(`https://8100-eduardo2804-breakingbad-wxr3umvemcb.ws-eu45.gitpod.io/assets/episode.json`);
    }

    getCharacters() {
        return this.http.get('https://8100-eduardo2804-breakingbad-wxr3umvemcb.ws-eu45.gitpod.io/assets/characters.json')
    }

    getCharacter(id) {
        return this.http.get(`https://8100-eduardo2804-breakingbad-wxr3umvemcb.ws-eu45.gitpod.io/assets/character.json`);
    }

    getQuotes() {
        return this.http.get('https://8100-eduardo2804-breakingbad-wxr3umvemcb.ws-eu45.gitpod.io/assets/quotes.json')
    }

    getQuote(id) {
        return this.http.get(`https://8100-eduardo2804-breakingbad-wxr3umvemcb.ws-eu45.gitpod.io/assets/quote.json`);
    }

    getDeaths() {
        return this.http.get(`https://www.breakingbadapi.com/api/death-count?name=Gustavo+Fring`)
    }

}