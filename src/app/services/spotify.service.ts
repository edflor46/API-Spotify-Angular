import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('ok');
  }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQA4Oh5Up1KlTE2-4_Cs0U1dtz20RmBvA1zXAiLLkxFmOZyzF1S7--1U22SBpDFpyWTZSXb7FoP3Ty3eqwI',
    });

    return this.http.get(url, { headers } );
  }

  getNewRelease() {
    // const headers = new HttpHeaders({
    //   Authorization:
    //     'Bearer BQBqb8JdHPuFWtuShB4VGV6slBK6F3D_oqIYG8TtjxfvqfcdgXgg1_rrAvxZ5TvrmVfKzeKtcCGDTgm4Tq8',
    // });

      // this.http.get('https://api.spotify.com/v1/browse/new-releases', {
    //     headers,
    //   }).pipe( map ((data) => data['albums'].items));

    return this.getQuery('browse/new-releases').pipe( map ((data) => data['albums'].items)); 
    
  
 }

  getArtistas(termino: string) {
    // const headers = new HttpHeaders({
    //   Authorization:
    //     'Bearer BQBqb8JdHPuFWtuShB4VGV6slBK6F3D_oqIYG8TtjxfvqfcdgXgg1_rrAvxZ5TvrmVfKzeKtcCGDTgm4Tq8',
    // });
    // return this.http.get(
    //   `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=10`,{ headers}
    // ).pipe(map((data)=> data['artists'].items));
    return this.getQuery(`search?q=${termino}&type=artist&limit=10`).pipe(map((data)=>data['artists'].items));
  }

  getArtista(id: string) {
 
    return this.getQuery(`artists/${id}`);
    // .pipe(map((data)=>data['artists'].items));
  }

  getTopTracks(id: string) {
 
    return this.getQuery(`artists/${id}/top-tracks?market=us`)
    .pipe(map((data)=>data['tracks']));
  }
}
